import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import {
  TournamentComponent
} from './';

@NgModule({
  declarations: [
    MainComponent,
    TournamentComponent
  ],
  imports: [
    CommonModule,
    LoadingBarModule,
    RouterModule,
    SharedModule
  ]
})
export class MainModule { }
