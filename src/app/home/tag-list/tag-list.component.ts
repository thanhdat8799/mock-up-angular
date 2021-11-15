import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  @Input() tags: any;
  @Output() searchTags = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  searchTag(tag: string): void {
    this.searchTags.emit(tag);
    console.log(tag);
  }
}
