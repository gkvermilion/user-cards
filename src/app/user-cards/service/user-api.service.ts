import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class UsersApi {
  private _DB: IUserDto[] = [
    { id: 'u1', userName: 'Ivan Z.', isActive: true },
    { id: 'u2', userName: 'Mikhail X.', isActive: true },
    { id: 'u3', userName: 'Ivan C.', isActive: true },
    { id: 'u4', userName: 'Petr V.', isActive: true },
    { id: 'u5', userName: 'Artyom B.', isActive: true },
    { id: 'u6', userName: 'Gleb N.', isActive: true },
    { id: 'u7', userName: 'Anton M.', isActive: true },
    { id: 'u8', userName: 'Semyon A.', isActive: true },
    { id: 'u9', userName: 'Arseniy S.', isActive: true },
    { id: 'u10', userName: 'Nick D.', isActive: true },
    { id: 'u11', userName: 'Alex F.', isActive: true },
    { id: 'u12', userName: 'Kirill G.', isActive: true },
    { id: 'u13', userName: 'Stas H.', isActive: true },
    { id: 'u14', userName: 'Yuriy J.', isActive: true },
    { id: 'u15', userName: 'Roman K.', isActive: true },
    { id: 'u16', userName: 'Ivan L.', isActive: true },
    { id: 'u17', userName: 'Ivan Q.', isActive: true },
  ];

  getList(request: IListRequest): Observable<IUserListResponseDto> {
    const { pageNumber, itemsPerPage, search } = request;
    let dto: IUserDto[] = this._DB;
    if (search) {
      dto = this._DB.filter(x => x.userName.toLowerCase().includes(search.toLowerCase()));
    }
    let responseDto = dto.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
    return of({ total_count: dto.length, items: responseDto } as IUserListResponseDto)
  }

  getById(id: string): Observable<IUserDto | IUserNotFound> {
    const dto = this._DB.find(x => x.id === id);
    if (dto) {
      return of(dto)
    }
    return of({ id, message: 'not found'} as IUserNotFound)
  }

  remove(id: string): Observable<void> {
    this._DB = this._DB.filter(x => x.id !== id);
    console.log(this._DB);
    return of(void 0);
  }
}

export interface IUserDto {
  id: string;
  userName: string;
  isActive: boolean;
}

export interface IListRequest {
  pageNumber: number;
  search?: string;
  itemsPerPage: 5 | 10 | 20;
}

export interface IUserListResponseDto {
  total_count: number;
  items: IUserDto[];
}

export interface IUserNotFound {
  id: string;
  message: string;
}