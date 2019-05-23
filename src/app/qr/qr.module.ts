import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QrPage } from './qr.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  imports: [
    //ModalPageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QrPage }])
  ],
  declarations: [QrPage]
})
export class QrPageModule {}
