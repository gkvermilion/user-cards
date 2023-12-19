import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IListRequest, UsersApi, IUserDto } from '../../service/user-api.service';
import { Observable, debounceTime, distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  request: IListRequest = {
    pageNumber: 1,
    itemsPerPage: 5
  };
  users: IUserDto[] = [];
  total_count: number = 0;
  showCards: boolean = false;
  isLoading: boolean = true;

  constructor(private _usersApi: UsersApi) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    this._usersApi.getList(this.request)
      .subscribe(response => {
        this.users = response.items;
        this.total_count = response.total_count;
        this.isLoading = false;
      })
  }

  changePage(page: number) {
    this.request.pageNumber = page;
    this.fetchData();
  }

  onSearchSubmit(search: string) {
    this.request.search = search;
    this.fetchData();
  }

  switchCards($event: boolean) {
    this.showCards = $event;
  }

  deleteUser(id: string) {
    this._usersApi.remove(id).subscribe(response => {
      this.fetchData();
      console.log(response);
    })
  }

  changeItemsPerPage($event: any) {
    this.request.itemsPerPage = $event;
    this.fetchData();
  }
}
