import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD:src/app/header/header.component.ts
  @Input() isCheckLogin!: boolean;
=======
  isCheckLogin: boolean = true;
>>>>>>> auth:src/app/home/header/header.component.ts
  constructor() { }

  ngOnInit(): void {
  }

}
