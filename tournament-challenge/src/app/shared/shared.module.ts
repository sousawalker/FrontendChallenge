import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  FirstLetterPipe,
  TeamManagementComponent,
  TeamPositionsComponent
} from './';

@NgModule({
  declarations: [
    TeamPositionsComponent,
    FirstLetterPipe,
    TeamManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FirstLetterPipe,
    TeamManagementComponent,
    TeamPositionsComponent
  ]
})
export class SharedModule { }
