import { Component, OnInit } from '@angular/core';

import { logoFadeAnimation } from "../animation/animations";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css'],
  animations: [logoFadeAnimation]
})
export class AboutViewComponent implements OnInit {
	private viewInit: boolean = false;
  constructor() { }

  ngOnInit() {
  	setTimeout(() => {
           this.viewInit = true;
       }, 1000);
  }

}
