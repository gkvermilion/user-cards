import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserDto } from '../../user-cards/service/user-api.service';

@Component({
  selector: 'app-user-card [user]',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {

  @Input()
  user!: IUserDto;

  @Output()
  delete: EventEmitter<string> = new EventEmitter();

  popup() {
    throw new Error('Method not implemented.');
  }

}
