import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  accounts: any = [
    {
      'accountName': 'IRA',
      'accountNum': '5200',
      'availableCash': 94016.69,
      'previousCash': 94916.69
    },
    {
      'accountName': 'AAA',
      'accountNum': '0029',
      'availableCash': 90576.36,
      'previousCash': 55873

    },
    {
      'accountName': 'AAA',
      'accountNum': '1812',
      'availableCash': 34576.36,
      'previousCash': 77835
    },
    {
      'accountName': 'REG',
      'accountNum': '2019',
      'availableCash': 34576.36,
      'previousCash': 34576.36
    },
    {
      'accountName': 'AAA',
      'accountNum': '3810',
      'availableCash': 45576.36,
      'previousCash': 45476
    },
    {
      'accountName': 'IRA',
      'accountNum': '0146',
      'availableCash': 56762.4,
      'previousCash': 56872.4
    }
  ];

  constructor() {}

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
  availableCash: number;
  previousCash: number;
}

export class SortCriteria {
  sortColumn: string;
  sortDirection: string;
}
