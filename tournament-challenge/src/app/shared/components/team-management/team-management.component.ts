import { Component, Input, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

import {
  TeamPositionsService
} from '../../services';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {
  @Input() data: any;

  loadingBar: any;

  modal: boolean = false;

  constructor(
    private loadingBarService: LoadingBarService,
    private teamPositionsService: TeamPositionsService
  ) { }

  ngOnInit(): void {
    this.loadingBar = this.loadingBarService.useRef();
  }

  async updateTeam(obj: any, event: any) {
    this.loadingBar.stop();

    this.loadingBar.start();

    delete obj.active;

    obj.name = event.target.value;

    await this.teamPositionsService.editTeamPositions(obj.id, obj).toPromise();

    this.loadingBar.complete();
  }

  modalToggle() {
    this.modal = !this.modal;
  }

}
