import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message',{responseType:'text'})
      .subscribe((resp: any) => {
        console.log('message.response',resp);
        this.message = resp;
      });
  }
}
