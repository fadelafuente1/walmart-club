import {Observable, BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})

export class InfoService {
  constructor() {
  }
  private transactionInfo = new BehaviorSubject(new Transaction());
  castTransactionInfo = this.transactionInfo.asObservable();

  setTransactionInfo(value: Transaction) {
    this.transactionInfo.next(value);
  }

}
