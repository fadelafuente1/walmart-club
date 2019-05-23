import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalPageModule } from '../modal/modal.module';
import { ConfirmTransferComponent } from './confirm-transfer.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ModalPageModule,
    RouterModule.forChild([{ path: '', component: ConfirmTransferComponent }])
  ],
  declarations: [ConfirmTransferComponent]
})
export class ConfirmTransferModule {}
