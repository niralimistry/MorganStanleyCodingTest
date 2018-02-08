import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import {Account} from './account';
import {SortColumnComponent} from './sort-column/sort-column.component';
import {SortCriteria} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: any = [];
  loadMore: boolean = false;
  criteria: SortCriteria = {sortColumn: '', sortDirection: ''};

  constructor(private dataService: DataService) { }


  onSorted($event) {
    this.getData($event);
  }

  getData (criteria: SortCriteria) {
    this.criteria = criteria;
    this.accounts = this.dataService.getAccount(criteria, this.loadMore);
  }

  ngOnInit(): void {
   this.getData(this.criteria);
  }

  loadMoreClick() {
    this.loadMore = true;
    this.getData(this.criteria);
  }

  convertString(value) {
    return parseFloat(value);
  }

  getDifference(availableCash, previousCash) {
    return this.convertString(availableCash.replace(',', '')) - this.convertString(previousCash.replace(',', ''));
  }

  getDifferenceClass(availableCash, previousCash) {
    console.log(availableCash);
    if (this.convertString(availableCash.replace(',', '')) - this.convertString(previousCash.replace(',', '')) > 0) {
      return 'color-green';
    } else {
      return 'color-red';
    }
  }

}
