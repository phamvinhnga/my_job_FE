import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my_project';

  constructor(
    private readonly meta:Meta
  ){
    meta.updateTag({
      name: "Description",
      content: "Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular."
    })
  }
}
