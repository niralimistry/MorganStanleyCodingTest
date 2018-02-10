import {Component, OnInit, Input, EventEmitter, OnDestroy, HostListener, HostBinding} from '@angular/core';
import {SortService} from '../services/sort.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: '[app-sort-column]',
  templateUrl: './sort-column.component.html',
  styleUrls: ['./sort-column.component.scss']
})
export class SortColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortService) {}

  @HostBinding('class.sorted') isSorted = false;

  @Input('app-sort-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @Input('symbol')
  symbol: string = 'after';

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
        this.isSorted = false;
      } else {
        this.isSorted = true;
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
