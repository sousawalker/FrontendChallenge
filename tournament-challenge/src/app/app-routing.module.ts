import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  MainComponent,
  TournamentComponent
} from './main';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: TournamentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
