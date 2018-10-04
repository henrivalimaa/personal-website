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
  private skills: any;
  private view: any;

  constructor() { }

  ngOnInit() {
    this.skills = { 
      programming: [
        { label: 'Angular', level: 4 },
        { label: 'AngularJS', level: 4 },
        { label: 'CSS/Sass', level: 4 },
        { label: 'ES6 + TypeScript', level: 3 },
        { label: 'Java', level: 3, description: 'Spring & Hibernate' },
        { label: 'Python', level: 3, description: 'Django Frameworks' },
        { label: 'C# (.NET)', level: 3 },
        { label: 'React + Redux', level: 2, description: 'Learning in progress' }
      ],
      environments: [
        { label: 'Linux', level: 4 , description: 'Currently using Ubuntu 18.04'},
        { label: 'Windows', level: 3 },
        { label: 'Mac OS', level: 2 },
        { label: 'AWS', level: 3 },
        { label: 'GCP', level: 3 },
        { label: 'Azure', level: 2 }
      ],
      workflow: [
        { label: 'Agile Scrum', level: 4 },
        { label: 'Git', level: 3 },
        { label: 'Docker', level: 2 },
        { label: 'LXC & LXD', level: 2 },
        { label: 'Jenkins', level: 2 },
        { label: 'UML', level: 4, description: 'Design & Architecture' }
      ]
    }
  }

}
