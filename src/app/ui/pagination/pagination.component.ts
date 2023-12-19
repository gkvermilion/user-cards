import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination [currentPage] [total] [limit]',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() currentPage!: number;
  @Input() total!: number;
  @Input() limit!: number;
  @Output() changePage = new EventEmitter<number>();
  @Output() changeItemsPerPage = new EventEmitter<number>();
  pages: number[] = [];

  ngOnInit(): void {
    this.pages = Array.from(Array(Math.ceil(this.total / this.limit)).keys()).map(i => i + 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['total']) {
      this.pages = Array.from(Array(Math.ceil(this.total / this.limit)).keys()).map(i => i + 1);
    }
  }

  onSelectChange($event: Event) {
    this.changeItemsPerPage.emit(Number(($event.target as HTMLSelectElement).value));
  }
}
