import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {SortCriteria} from './data.service';

@Injectable()
export class SortService {

  constructor() { }

  private sortColumnSubject = new Subject<SortCriteria>();
  public sortColumnObservable = this.sortColumnSubject.asObservable();

  sortColumn(event: SortCriteria) {
    this.sortColumnSubject.next(event);
  }
}
