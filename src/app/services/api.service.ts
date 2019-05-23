import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface consultarPointsResult {
  points: number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  base = "https://codeception.yumsys.com"


  options = {
    headers: {
    "Access-Control-Allow-Headers": "Access-Control-Allow-Origin",
    "Access-Control-Allow-Origin":"*",
    "access-control-allow-methods":"GET,POST,PUT",
    "Content-Type": "application/json"
    }
  };
  constructor(private http: HttpClient) { }

  getProducts() {
    // let header: HttpHeaders = new HttpHeaders();
    // header = header.set('Authorization', ('Token ' + auth));
    // header = header.append("Content-Type", "application/json");
    return this.http.get(`${this.base}/products`, this.options).toPromise();
  }

  transferPoint(numberFrom, numberTo, amount) {
    // let header: HttpHeaders = new HttpHeaders();
    // header = header.set('Authorization', ('Token ' + auth));
    // header = header.append("Content-Type", "application/json");
    const data = {
      amount: parseInt(amount),
      phoneNumberDestination: {code: 56, number: parseInt(numberFrom)},
      phoneNumberOrigin: {code: 56, number: parseInt(numberTo)}
    };
    return this.http.post(`${this.base}/transfer`, data, this.options);
  }

  consultarPoints(numberFrom) {
    // let header: HttpHeaders = new HttpHeaders();
    // header = header.set('Authorization', ('Token ' + auth));
    // header = header.append("Content-Type", "application/json");
    return this.http.get(`${this.base}/users/${numberFrom}/points`, this.options);
  }
}
