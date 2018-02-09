import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountChangeComponent } from './amount-change.component';

describe('AmountChangeComponent', () => {
  let component: AmountChangeComponent;
  let fixture: ComponentFixture<AmountChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
