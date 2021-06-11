import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

import {
  TeamPositionsService
} from '../../services';

@Component({
  selector: 'app-team-positions',
  templateUrl: './team-positions.component.html',
  styleUrls: ['./team-positions.component.scss']
})
export class TeamPositionsComponent implements OnInit, OnChanges {
  @Input() data: any;

  loadingBar: any;

  idToPut: any;

  constructor (
    private loadingBarService: LoadingBarService,
    private teamPositionsService: TeamPositionsService
  ) {}

  ngOnInit(): void {
    this.idToPut = { 1: 9, 2: 9, 3: 10, 4: 10, 5: 11, 6: 11, 7: 12, 8: 12, 9: 13, 10: 13, 11: 14, 12: 14, 13: 15, 14: 15 };

    this.loadingBar = this.loadingBarService.useRef();
  }

  ngOnChanges(changes: any) {
    if (changes.data) {
      if (!changes.data.firstChange) {
        this.setActive();
      }
    }
  }

  async toggleActive(obj: any) {
    this.loadingBar.stop();

    this.loadingBar.start();

    delete obj.active;

    await this.teamPositionsService.editTeamPositions(this.idToPut[obj.id], obj).toPromise();

    this.teamPositionsService.listTeamPositions().subscribe((res) => {
      this.data = res;

      this.setActive();

      this.loadingBar.complete();
    });

    this.loadingBar.complete();
  }

  setActive() {
    let firstClass = [],
        secondClass = [],
        winner = [];

    for (let i = 0; i < this.data.length; i++) {
      if (i === 14) {
        winner.push(this.data[i].name);
      } else if (i > 11 && i < 14) {
        secondClass.push(this.data[i].name);
      } else if (i > 7 && i < 12) {
        firstClass.push(this.data[i].name);
      }
    }

    for (let i = 0; i < this.data.length; i++) {
      this.data[i].active = false;

      if (i > 11 && i < 14) {
        if (winner.includes(this.data[i].name)) {
          this.data[i].active = true;
        }
      } else if (i > 7 && i < 12) {
        if (secondClass.includes(this.data[i].name)) {
          this.data[i].active = true;
        }
      } else if (i < 8) {
        if (firstClass.includes(this.data[i].name)) {
          this.data[i].active = true;
        }
      }
    }
  }
}
