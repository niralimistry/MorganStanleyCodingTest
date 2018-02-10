import {Component, OnInit, Input, HostBinding, Host} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-amount-change',
  templateUrl: './amount-change.component.html',
  styleUrls: ['./amount-change.component.scss']
})
export class AmountChangeComponent implements OnInit {

  constructor() { }

  @Input() previousCash: number;

  @Input('availableCash')
  available: number;

  totalChange: number;
  percentageChange: number;

  @HostBinding('style.color') color = 'green';

  ngOnInit(): void {
    this.totalChange = this.available - this.previousCash;
    this.percentageChange = this.totalChange / this.previousCash;
    if (this.totalChange < 0) {
      this.color = 'red';
    }
    if (this.totalChange === 0) {
      this.color = 'gray';
    }
    this.totalChange = Math.abs(this.totalChange);
  }
}
