import { Component, OnInit } from '@angular/core';

import { logoFadeAnimation } from "../animation/animations";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  animations: [logoFadeAnimation]
})
export class HomeViewComponent implements OnInit {
	private showLogo: boolean = false;

  constructor() { }

  ngOnInit() {
  	this.displayLogo();
  }

  displayLogo(): void {
  	setTimeout(() => {
           this.showLogo = true;
       }, 1000);
  }

}
