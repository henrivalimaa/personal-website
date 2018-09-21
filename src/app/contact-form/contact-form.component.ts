import { Component, OnInit, Input } from '@angular/core';

import { messageAnimation, contactFormAnimation } from "../animation/animations";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [
    messageAnimation,
    contactFormAnimation
  ]
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  @Input() show: boolean;

  private showMessage: boolean = false;

  ngOnInit() {
  }

  private message : string;

	sendMessage(): void {
		this.showMessage = true;
		this.message = 'Your message has been sent';

    setTimeout(() => {
           this.showMessage = false;
       }, 7000);
	}

}
