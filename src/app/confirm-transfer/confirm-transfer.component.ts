import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ModalPage } from '../modal/modal.page';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core';

@Component({
  selector: 'app-confirm-transfer',
  templateUrl: './confirm-transfer.component.html',
  styleUrls: ['./confirm-transfer.component.scss'],
})
export class ConfirmTransferComponent implements OnInit {
  transactionInfo = null;
  constructor(
    private infoService: InfoService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.infoService.castTransactionInfo.subscribe(
      transaction => this.transactionInfo = transaction
    );
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
   });
    return await modal.present();
  }

}
