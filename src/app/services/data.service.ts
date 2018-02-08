import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  accounts: any = [
    {
      'accountName': 'IRA',
      'accountNum': '5200',
      'availableCash': '5,763.36',
      'previousCash': '5,916.69'
    },
    {
      'accountName': 'AAA',
      'accountNum': '1812',
      'availableCash': '84,302.39',
      'previousCash': '76,872.4'
    },
    {
      'accountName': 'AAA',
      'accountNum': '3802',
      'availableCash': '5763.36',
      'previousCash': '8,916'
    },
    {
      'accountName': 'REG',
      'accountNum': '2019',
      'availableCash': '5763.36',
      'previousCash': '8,916'
    },
    {
      'accountName': 'IRA',
      'accountNum': '0146',
      'availableCash': '5763.36',
      'previousCash': '8,916'
    }
  ];

  constructor(private _http: HttpClient) {}

  getAccounts(): Observable<any> {
    return this._http.get<any>('../assets/account.json');
  }

  getAccount(criteria: SortCriteria, loadMore): Account[] {
    let data = this.accounts.slice();
    if (criteria.sortDirection !== '') {
      data.sort((a, b) => {
        if (criteria.sortDirection === 'desc') {
          return a[criteria.sortColumn] < b[criteria.sortColumn];
        } else {
          return a[criteria.sortColumn] > b[criteria.sortColumn];
        }
      });
    }
    if (!loadMore) {
      data = data.splice(0, 3);
    }
    return data;
  }
}

export class Account {
  accountName: string;
  accountNum: string;
  availableCash: string;
  previousCash: string;
}

export class SortCriteria {
  sortColumn: string;
  sortDirection: string;
}
