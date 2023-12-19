import { AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  searchForm = this._fb.nonNullable.group({
    searchValue: '',
  });
  input$!: Observable<Event>;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.input$ = new Observable(observer => {
      const input = document.getElementById('input') as HTMLInputElement;
      input.addEventListener('input', event => {
        observer.next(event);
      })
    }) 
    this.input$.pipe(
      // debounceTime(500), // можно так
      throttleTime(500), // можно вот так
      distinctUntilChanged()
    ).subscribe({
      next: () => this.search.emit(this.searchForm.value.searchValue ?? '')
    })
  }
}
