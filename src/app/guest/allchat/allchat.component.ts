import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../test-data.service';

@Component({
  selector: 'app-allchat',
  templateUrl: './allchat.component.html',
  styleUrls: ['./allchat.component.scss']
})
export class AllchatComponent implements OnInit {
  
  chat: any;

  constructor(private Data:TestDataService){}
  
  ngOnInit(){
    this.chat = this.Data.getAllchat();
    console.log(this.chat);
  }
}
