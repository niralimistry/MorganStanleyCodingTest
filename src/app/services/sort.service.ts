import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {SortCriteria} from './data.service';

@Injectable()
export class SortService {

  constructor() { }

  private columnSortedSource = new Subject<SortCriteria>();

  public columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: SortCriteria) {
    this.columnSortedSource.next(event);
  }
}
