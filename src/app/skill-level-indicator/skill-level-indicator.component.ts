import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-level-indicator',
  templateUrl: './skill-level-indicator.component.html',
  styleUrls: ['./skill-level-indicator.component.css']
})
export class SkillLevelIndicatorComponent implements OnInit {

	@Input() level: number;
	@Input() label: string;
	@Input() description: string;

	private indicators: Array<number> = [];

  constructor() { }

  ngOnInit() {
  	for (let i = 0; i < this.level; i++) {
  		this.indicators.push(1);
  	}

  	let emptyIndicators = 5 - this.level;

  	for (let i = 0; i < emptyIndicators; i++) {
  		this.indicators.push(0);
  	}
  }

}
