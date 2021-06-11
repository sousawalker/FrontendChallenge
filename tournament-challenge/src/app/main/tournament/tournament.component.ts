import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

import {
  TeamPositionsService
} from '../../shared';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html'
})
export class TournamentComponent implements OnInit {
  teamPositions: any;

  loadingBar: any;

  constructor(
    private loadingBarService: LoadingBarService,
    private teamPositionsService: TeamPositionsService
  ) { }

  ngOnInit(): void {
    this.loadingBar = this.loadingBarService.useRef();

    this.getTeamsPositions();
  }

  async getTeamsPositions() {
    this.loadingBar.stop();

    this.loadingBar.start();

    this.teamPositions = await this.teamPositionsService.listTeamPositions().toPromise();

    this.loadingBar.complete();
  }

}
