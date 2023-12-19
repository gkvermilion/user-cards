import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserDto } from '../../user-cards/service/user-api.service';

@Component({
  selector: 'app-user-string [user]',
  templateUrl: './user-string.component.html',
  styleUrl: './user-string.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStringComponent {

  @Input()
  user!: IUserDto;

  @Output()
  delete: EventEmitter<string> = new EventEmitter();

}
