import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-Web',
  templateUrl: './Web.component.html',
  styleUrls: ['./Web.component.scss']
})
export class WebComponent {

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;


  constructor(private meta:Meta) {
    meta.updateTag({
        name: "Description",
        content: "Angular is a platf2222222orm for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular."
      })
  }
}
