import { TestBed } from '@angular/core/testing';

import { HttpErorrInterceptor } from './http-erorr.interceptor';

describe('HttpErorrInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErorrInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErorrInterceptor = TestBed.inject(HttpErorrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
