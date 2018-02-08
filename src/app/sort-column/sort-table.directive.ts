import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortService } from '../services/sort.service';

@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective implements OnInit, OnDestroy {

  constructor(private sortService: SortService) {}

  @Output() sorted = new EventEmitter();

  private columnSortedSubscription: Subscription;

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      this.sorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}


