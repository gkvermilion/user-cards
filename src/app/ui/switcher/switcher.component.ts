import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switcher [switcherState]',
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitcherComponent {

  @Output() switch = new EventEmitter<boolean>();
  @Input() switcherState!: boolean;
}
