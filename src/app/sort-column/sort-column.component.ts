import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import {SortService} from '../services/sort.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: '[app-sort-column]',
  templateUrl: './sort-column.component.html'
})
export class SortColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortService) {}

  @Input('app-sort-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      if (this.columnName !== event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
