import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SortService } from '../services/sort.service';

@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective implements OnInit, OnDestroy {

  constructor(private sortService: SortService) {}

  @Output() sorted = new EventEmitter();
  private sortColSub: Subscription;

  ngOnInit() {
    this.sortColSub = this.sortService.sortColumnObservable.subscribe(sortEvent => {
      this.sorted.emit(sortEvent);
    });
  }

  ngOnDestroy() {
    this.sortColSub.unsubscribe();
  }
}


