import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BetsService } from '../../services/bets.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Settings } from '../../settings/settings';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;
  let service: BetsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
      [
        BetSlipComponent
      ],
      providers: [
        BetsService
    ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check Wins', () => {
    component.moneyBet = 1;
    Settings.WINNING = 5;
    expect(component.checkWins()).toEqual(5);
  });

  it('check confirm bet', () => {
    const spy1 = spyOn(component, 'checkDisabledBet').and.callFake( ()=> null)
    component.moneyBet = 1;
    component.confirmBet();
    expect(spy1).toHaveBeenCalled();
  });

  it('should create dataUserSelection ', () => {
    expect(component.dataUserSelection).toBeTruthy();
  });


  it('check Disabled Bet', () => {
    component.checkDisabledBet();
    component.selectionUser = 1;
    component.myForm.controls.bet.setValue(1);
    component.moneyBet = 1;

    expect(component.disabledBet).toBeTrue();
  });

  it('check Disabled Bet', () => {
    component.checkDisabledBet();
    component.selectionUser = 1;
    component.myForm.controls.bet.setValue(-1);
    component.moneyBet = 1;

    expect(component.disabledBet).toBeTrue();
  });

  it('check Selection User', () => {
    const spy1 = spyOn(component, 'checkDisabledBet').and.callFake( ()=> null)
    component.checkSelectionUser(1);
    expect(spy1).toHaveBeenCalled();
  });

  it('Function to generate Sorteo', () => {
    const spy1 = spyOn(component, 'checkSelectionUser').and.callFake( ()=> null)
    component.generarSorteo();
    expect(spy1).toHaveBeenCalled();

  });



});
