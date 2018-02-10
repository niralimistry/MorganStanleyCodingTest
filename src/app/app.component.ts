import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {SortCriteria} from './services/data.service';
import {Account} from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  accounts: Account[];
  accountsToDisplay: Account[];
  loadMore = false;

  constructor(private dataService: DataService) {
  }

  onSorted($event) {
    this.getData($event);
  }

  getData(criteria: SortCriteria) {
    this.accounts = this.dataService.getAccount(criteria);
    if (!this.loadMore) {
      this.accountsToDisplay = this.accounts.slice(0, 3);
    } else {
      this.accountsToDisplay = this.accounts;
    }
  }

  ngOnInit(): void {
    this.getData({column: '', direction: ''});
  }

  loadMoreClick() {
    this.loadMore = true;
    this.accountsToDisplay = this.accounts;
  }
}
