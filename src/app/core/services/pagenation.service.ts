import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagenationService {
  indexPage = new BehaviorSubject<number>(1);
  constructor() { }
}
