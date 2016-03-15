import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<h1>{{greeting}}</h1>',
})
export class AppComponent {
  greeting: string = "Hello World!";
  constructor() {
    setTimeout(() => {
      this.greeting = "Good Bye World!";
    }, 1000);
  }
}
