import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

	@Input() properties: any;

  constructor() { }

  ngOnInit() {
  }

}
