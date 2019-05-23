import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  modalTitle: string;
  modelId: number;
  constructor(
    private modalController: ModalController,
  ) { }
  ngOnInit() {
  }
  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
}
