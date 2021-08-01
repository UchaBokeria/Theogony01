import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TestDataService {
  chat:any;

  constructor(private httpClient: HttpClient) { }

  getAllchat(){
    this.httpClient.get("assets/test.json").subscribe(data =>{
      this.chat = data;
    });
    return this.chat;
  };
}
