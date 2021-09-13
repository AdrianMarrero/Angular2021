import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetsRoutingModule } from './bets-routing.module';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BallSelectorComponent, BetSlipComponent, FullScreenComponent],
  imports: [
    CommonModule,
    BetsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BetsModule { }
