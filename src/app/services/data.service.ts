import {Injectable} from '@angular/core';
import { Account } from '../account';

@Injectable()
export class DataService {
  accounts: Account[] = [
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
      'accountNum': '0129',
      'availableCash': 0,
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

  getAccount(criteria: SortCriteria): Account[] {
    let data = this.accounts.slice();
    if (criteria.direction !== '') {
      // console.log('sorting');
      data.sort((a, b) => {
        if (criteria.direction === 'desc') {
          return b[criteria.column] - a[criteria.column];
        } else {
          return a[criteria.column] - b[criteria.column];
        }
      });
    }
    return data;
  }
}

export interface SortCriteria {
  column: string;
  direction: string;
}
