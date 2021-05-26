import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allchat',
  templateUrl: './allchat.component.html',
  styleUrls: ['./allchat.component.scss']
})
export class AllchatComponent implements OnInit {
    texts = [
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
      {
        text: "user21 : hello guys",
        nickname: "",
      },
      {
        text: "user42 : hello friends",
        nickname: "",
      },
      {
        text: "user13 : hello world",
        nickname: "",
      },
      {
        text: "user22 : hello hi",
        nickname: "",
      },
      {
        text: "user66 : hellooo",
        nickname: "",
      },
      {
        text: "user103 : hii guyss",
        nickname: "",
      },
      {
        text: "user104 : hello guys",
        nickname: "",
      },
      {
        text: "user11 : hello maan",
        nickname: "",
      },
      {
        text: "user14 : hii",
        nickname: "",
      },
      {
        text: "user18 : welcomee",
        nickname: "",
      },
      {
        text: "user15 : hello friend",
        nickname: "",
      },
      {
        text: "user106 : how are you?",
        nickname: "",
      },
      {
        text: "user211 : am good",
        nickname: "",
      },
      {
        text: "user23 : thank you",
        nickname: "",
      },
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
