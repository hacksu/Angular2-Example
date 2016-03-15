import {Component} from 'angular2/core';
import {Image} from  './image';
@Component({
    selector: 'my-app',
    template: '<h1>{{greeting}}</h1> <image></image>',
    directives: [Image]
})
export class AppComponent {
  greeting: string = "Hello World!";
  constructor() {
    setTimeout(() => {
      this.greeting = "Good Bye World!";
    }, 1000);
  }
}
