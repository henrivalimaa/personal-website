import { Component } from '@angular/core';

import { Router, Event, NavigationEnd } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';

import { fadeAnimation } from "./animation/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {

	private routerState: string;

	constructor(private router: Router) {
    router.events.subscribe( (event: Event) => {
    	if (event instanceof NavigationEnd) {
    		this.routerState = event.url;
    	}
  	});
	}
}
