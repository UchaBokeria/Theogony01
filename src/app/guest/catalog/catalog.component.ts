import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    catalog = [
      {
        text: "SOME TEXT"
      },
      {
        text: "NEWS"
      },
      {
        text: "About Programming"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
      {
        text: "SOME TEXT"
      },
    ]
  constructor() { }

  ngOnInit(): void {
  }
}
