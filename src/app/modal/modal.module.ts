import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    ModalPage
  ],
  entryComponents: [
    ModalPage
  ]
})
export class ModalPageModule {}
