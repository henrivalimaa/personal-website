import { Component, OnInit, Input } from '@angular/core';

import { logoFadeAnimation } from "../animation/animations";

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
  animations: [ logoFadeAnimation ]
})
export class PortfolioItemComponent implements OnInit {

	@Input() properties: any;
	private showProject: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  displayProject(): void {
  	this.showProject = !this.showProject;
  }

}
