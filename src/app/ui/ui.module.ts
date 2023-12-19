import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserStringComponent } from './user-string/user-string.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    UserCardComponent,
    UserStringComponent,
    SearchComponent,
    PaginationComponent,
    SwitcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    UserCardComponent,
    UserStringComponent,
    SearchComponent,
    PaginationComponent,
    SwitcherComponent
  ]
})
export class UiModule { }
