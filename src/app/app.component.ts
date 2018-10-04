import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { fadeAnimation, navSlideAnimation } from "./animation/animations";

import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation, navSlideAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
  private showContactForm: boolean = false;
  private showAdditionalNav: boolean = false;
	private routerState: string;

  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;

	constructor(private router: Router, private ccService: NgcCookieConsentService) {
    router.events.subscribe( (event: Event) => {
    	if (event instanceof NavigationEnd) {
    		this.routerState = event.url;
    	}
  	});
	}

  ngOnInit() {
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        console.log('Open');
      });
 
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        console.log('Closed');
      });
  }
 
  ngOnDestroy() {
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
  }

  displayContactForm(): void {
    this.showContactForm = true;
    this.showAdditionalNav = false;
  }
}
