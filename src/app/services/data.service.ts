import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  accounts: any = [
    {
      'accountName': 'IRA',
      'accountNum': '5200',
      'availableCash': '67,763.36',
      'previousCash': '94,916.69'
    },
    {
      'accountName': 'AAA',
      'accountNum': '1812',
      'availableCash': '84,302.39',
      'previousCash': '56,872.4'
    },
    {
      'accountName': 'AAA',
      'accountNum': '3802',
      'availableCash': '45,576.36',
      'previousCash': '28,345'
    },
    {
      'accountName': 'REG',
      'accountNum': '2019',
      'availableCash': '34,576.36',
      'previousCash': '77,835'
    },
    {
      'accountName': 'IRA',
      'accountNum': '0146',
      'availableCash': '90,576.36',
      'previousCash': '55,873'
    }
  ];

  constructor() {}

  // getAccounts(): Observable<any> {
  //   return this._http.get<any>('../assets/account.json');
  // }

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
