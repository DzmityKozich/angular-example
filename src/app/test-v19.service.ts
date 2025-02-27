import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable()
export class TestV19Service {
  constructor(private httpClient: HttpClient) {
    // destroyRef.onDestroy(() => {
    //     console.log('destroy');
    // });
    // destroyRef.onDestroy(() => {
    //     console.log('destroy1');
    // });
  }

  public getUser() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  // ngOnInit(): void {
  //   console.log('object');
  // }

  // ngDoCheck() {
  //   console.log('XXX');
  // }

  // doSomth() {
  //   console.log('do somth');
  // }

  // ngOnDestroy(): void {
  //   console.log('destroy');
  // }
}
