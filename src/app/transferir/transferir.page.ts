import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { InfoService } from '../services/info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Transaction, Contact } from '../models/transaction';


@Component({
  selector: 'app-transferir',
  templateUrl: 'transferir.page.html',
  styleUrls: ['transferir.page.scss']
})
export class TransferirPage {
  contacts = [
    {name: 'Daniela Jeldres', number: 977434824, code: 56},
    {name: 'Santiago Larrain', number: 977434825, code: 56}
  ];
  transaction: Transaction;
  information = null;
  numberFrom = null;
  numberTo = null;
  amount = null;
  saldo = 0;
  contact: Contact;
  user = this.contacts[0];
  message = {
    success: false,
    error: false
  };
  constructor(
    private apiService: ApiService,
    private infoService: InfoService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.contact = this.contacts[1];
    this.apiService.consultarPoints(this.user.number).subscribe( data => {
      if (data["success"] === false) {
        this.saldo = 0;
      } else {
        this.saldo = data["message"]
      }
    });
  }

  transferir() {
    this.setDefaultParams();
    this.transaction = {amount: this.amount, from: this.user, to: this.contact, name: 'op 1'};
    this.apiService.transferPoint(this.user.number, this.contact.number, this.amount).subscribe(
      response => {
        console.log(response);
        this.message.success = true;
        this.apiService.consultarPoints(977434824).subscribe(
        data => {
          this.saldo = data['message']
          this.infoService.setTransactionInfo(this.transaction);
          this.router.navigate(['confirm-transfer']);
        });
      }, error => this.message.error = true
    );
  }
  setDefaultParams() {
    this.message.error = false;
    this.message.success = false;
  }


}
