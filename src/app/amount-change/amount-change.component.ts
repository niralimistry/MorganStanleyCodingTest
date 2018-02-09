import {Component, OnInit, Input, HostBinding, Host} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-amount-change',
  templateUrl: './amount-change.component.html',
  styleUrls: ['./amount-change.component.css']
})
export class AmountChangeComponent implements OnInit {
  accounts: any = [];

  constructor(private dataService: DataService) { }

  @Input('previousCash')
  previous: string;

  @Input('availableCash')
  available: string;

  totalChange: number;
  percentageChange: number;

  @HostBinding('style.color') color = 'green';

  ngOnInit(): void {
    const previous = parseFloat(this.previous.replace(',', ''));
    const available = parseFloat(this.available.replace(',', ''));
    this.totalChange = previous - available;
    this.percentageChange = this.totalChange * 100 / previous;
    if (this.totalChange < 0) {
      this.color = 'red';
    }
  }

  // getDifferenceClass(availableCash, previousCash) {
  //   if (this.convertString(availableCash.replace(',', '')) - this.convertString(previousCash.replace(',', '')) > 0) {
  //     return 'color-green';
  //   } else {
  //     return 'color-red';
  //   }
  // }

}
