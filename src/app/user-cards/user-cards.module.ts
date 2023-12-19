import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardsRoutingModule } from './user-cards-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserCardsRoutingModule,
    UiModule,
  ]
})
export class UserCardsModule { }
