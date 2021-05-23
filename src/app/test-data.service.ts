import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDATAService {
  homeData = [
    {
      id: 1,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 2,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 3,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 4,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 5,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 6,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 7,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    },
    {
      id: 8,
      title: "node.js volume 1",
      description: "This book is for the beginners who want to learn node js in a little time",
      thumbnail: "https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png",
      category: "books",
      subCategory: "",
      author: "S16KAs",
      views: 120
    }
  ];
  constructor() { }
  getHome() {
    return this.homeData;
  }
}
