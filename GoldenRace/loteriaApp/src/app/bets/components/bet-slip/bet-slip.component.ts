import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BetsService } from '../../services/bets.service';
import { Settings } from '../../settings/settings';



@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnDestroy {

  dataUserSelection = Settings.DATAUSERSELECTION;
  selectionUser: number;
  selectionUserSubs: Subscription;
  resultadoSorteoSubs: Subscription;
  disabledBet = true;
  moneyBet: number = 0;
  win: boolean = false;


  myForm: FormGroup = new FormGroup({
    'bet': new FormControl(Settings.MIN_BET, [Validators.min(Settings.MIN_BET), Validators.required])
  });

  constructor(private service: BetsService) {
    //
    // Get the selection in the component ball-selector
    // and call the function 'chekSelectionUser' for change status selected
    //
    this.selectionUserSubs = this.service.getUserSelection().subscribe( resp => {
      this.win = false;
      this.selectionUser = resp;
      this.checkSelectionUser(resp);
    })

    this.resultadoSorteoSubs = this.service.resultadoSorteo.subscribe( resp => {
      if(this.selectionUser === resp){
        this.win = true;
      }else{
        this.win = false;
      }
    })

   }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.selectionUserSubs.unsubscribe();
    this.resultadoSorteoSubs.unsubscribe();
  }

  //
  // To call the service
  // Reset previous selection
  //
  generarSorteo(){
    this.service.generarSorteo(Settings.MIN, Settings.MAX);
    this.myForm.controls.bet.setValue(0);
    this.checkSelectionUser(0);
  }


  //
  // This function is to mark the user's selection
  //
  checkSelectionUser(ball){
    this.dataUserSelection.forEach(element => {
      if(ball === element.id){
        this.dataUserSelection[element.id - 1].selected = true;
      }else{
        this.dataUserSelection[element.id - 1].selected = false;
      }
    });
    this.checkDisabledBet();
  }

  checkDisabledBet(){
    if( this.selectionUser !== null && this.myForm.controls.bet.valid && this.moneyBet > 0){
      this.disabledBet = false;
    }else{
      this.disabledBet = true;
    }
  }


  confirmBet(){
     this.moneyBet = this.myForm.controls.bet.value;
     this.checkDisabledBet();
  }

  checkWins(){
    let winnings = this.moneyBet * Settings.WINNING;
    return winnings;
  }

}
