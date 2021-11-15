import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PagenationService } from 'src/app/core/services/pagenation.service';


@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent implements OnInit {
  @Input() articleCount: number;
  @Output() indexPage = new EventEmitter<number>();
  counts: number[] = [];
  constructor(
    private pagenationService: PagenationService,
  ) { }

  ngOnInit(): void {
    const count1 = Math.floor(this.articleCount / 20 + 1)
    for(let i = 0; i < count1; i++){
      this.counts.push(i + 1);
    }
    console.log(this.counts)
  }
  onClick(count: number){
    console.log(count);
    this.indexPage.emit(count);
  }
}
