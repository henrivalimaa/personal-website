import { Component } from '@angular/core';

import { Router, Event, NavigationEnd } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';

import { fadeAnimation, navSlideAnimation } from "./animation/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation, navSlideAnimation]
})
export class AppComponent {
  private showContactForm: boolean = false;
  private showAdditionalNav: boolean = false;
	private routerState: string;

	constructor(private router: Router) {
    router.events.subscribe( (event: Event) => {
    	if (event instanceof NavigationEnd) {
    		this.routerState = event.url;
    	}
  	});
	}

  displayContactForm(): void {
    this.showContactForm = true;
    this.showAdditionalNav = false;
  }
}
