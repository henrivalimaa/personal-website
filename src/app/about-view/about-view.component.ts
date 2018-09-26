import { Component, OnInit } from '@angular/core';

import { SkillLevelIndicatorComponent } from '../skill-level-indicator/skill-level-indicator.component';

import { logoFadeAnimation } from "../animation/animations";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css'],
  animations: [logoFadeAnimation]
})
export class AboutViewComponent implements OnInit {
  private skills: Array<any>;

  constructor() { }

  ngOnInit() {
    this.skills = [
      { label: 'Angular', level: 4 },
      { label: 'AngularJS', level: 4 },
      { label: 'CSS/Sass', level: 4 },
      { label: 'ES6 + TypeScript', level: 3 },
      { label: 'Java', level: 3, description: 'Spring & Hibernate' },
      { label: 'Python', level: 3, description: 'Django Frameworks' },
      { label: 'C# (.NET)', level: 3 },
      { label: 'React + Redux', level: 2, description: 'Learning in progress' },
      { label: 'AWS & GCP', level: 3 }
    ];
  }

}
