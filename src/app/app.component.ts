import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import {SortCriteria} from './services/data.service';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  accounts: Account[];
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

}
