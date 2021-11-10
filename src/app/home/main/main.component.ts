import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isCheckLogin: boolean = true;
  
  posts = [
    {
      author: "James",
      time : "2016-02-18T03:22:56.637Z",
      title: "This is title",
      text : "lorem is asdf;ladjsfkalsdf    jasldj lsdfjalsdfjlasjdfjasd fsdj fjdf jladsjf"

    },
    {
      author: "James",
      time : "2016-02-18T03:22:56.637Z",
      title: "This is title",
      text : "lorem is asdf;ladjsfkalsdf    jasldj lsdfjalsdfjlasjdfjasd fsdj fjdf jladsjf"

    },
    {
      author: "James",
      time : "2016-02-18T03:22:56.637Z",
      title: "This is title",
      text : "lorem is asdf;ladjsfkalsdf    jasldj lsdfjalsdfjlasjdfjasd fsdj fjdf jladsjf"

    },
    {
      author: "James",
      time : "2016-02-18T03:22:56.637Z",
      title: "This is title",
      text : "lorem is asdf;ladjsfkalsdf    jasldj lsdfjalsdfjlasjdfjasd fsdj fjdf jladsjf"

    }
  ]

  tags= ["react", "angular", "vue"]
  constructor() { }

  ngOnInit(): void {
  }

  handleTabClick(global, feed, globalContent, feedContent) {
    global.classList.toggle("active")
    feed.classList.toggle("active")
    globalContent.classList.toggle("show")
    globalContent.classList.toggle("active")
    feedContent.classList.toggle("show")
    feedContent.classList.toggle("active")
  }
}
