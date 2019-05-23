import { Component } from '@angular/core';
import { ApiService } from './../services/api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  
  saldo = 0;

  constructor(
    private apiService:ApiService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.apiService.consultarPoints(977434824).subscribe( data => {
      if (data["success"] == false){
        this.saldo = 0
      }else {
        this.saldo = data["message"]
      }
    })
  }
  


}
