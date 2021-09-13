import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetsService {

  resultadoSorteo = new Subject<number>();
  userItemsSelection = new Subject<number>();

  finishSorteo: boolean = false;


  constructor() { }

  generarSorteo(min, max){
    this.resultadoSorteo.next(Math.floor((Math.random() * (max - min + 1)) + min));
    this.finishSorteo = true;

  }

  getSorteo(): Observable<number>{
    return this.resultadoSorteo.asObservable();
  }

  setUserSelection(ball){
    this.userItemsSelection.next(ball);
  }

  getUserSelection(): Observable<number>{
    return this.userItemsSelection.asObservable();
  }

  clear(){
    this.userItemsSelection.next(0);
  }

}
