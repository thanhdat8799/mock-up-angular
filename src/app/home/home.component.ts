import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

}
