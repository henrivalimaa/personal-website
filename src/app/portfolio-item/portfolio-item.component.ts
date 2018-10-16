import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { fadeOutAnimation } from "../animation/animations";

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
  animations: [ fadeOutAnimation ]
})
export class PortfolioItemComponent implements OnInit {
	@ViewChild('slickModal') slickModal: ElementRef;

	@Input() properties: any;
	private showProject: boolean = false;
	private loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  displayProject(): void {
  	this.showProject = !this.showProject;
  	this.loading = true;
  	setTimeout(() => {
	       this.loading = false;
	   }, 2000);
  }


  slickInit(e) {
  }

  projects = [
   {
			label: 'Education Technologies', 
			name: 'YipTree', 
			shortDescription: 'Personal Learning Environment', 
			description: '', 
			background: {
				image: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url(https://pro2-bar-s3-cdn-cf3.myportfolio.com/84bc6461bb2abbb65ae9e645f8f60b7d/464b0568-94e4-488f-b2a2-fb887e973fbd_rw_1920.jpg?h=1008b1b34b97f91924eb0755587cfaef)',
				position: 'center top',
				size: 'cover'
			},
			status: 'Completed'
		},
		{ 
			label: 'Solution Provider', 
			name: 'Almerin', 
			shortDescription: 'Company Website', 
			description: '',
			background: {
				image: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url(https://4.bp.blogspot.com/-Ry_TXQPqKOg/WO3JhNBRciI/AAAAAAAApI4/hJPri1K-Ks0x9tF2vS6VMZdtMU66kIbyQCLcB/s1600/IMG_5382.jpg)',
				position: 'center top',
				size: 'cover'
			},
			status: 'Completed'
		},
		{ 
			label: 'Barbershop (Tampere)', 
			name: 'Jone\'s Barber', 
			shortDescription: 'Company Website', 
			description: '',
			background: {
				image: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(http://www.jonesbarber.fi/wp-content/uploads/2016/06/homepagelogo-e1472041489437.png)',
				position: 'center',
				size: 'cover'
			},
			status: 'Completed'
		},
		{ 
			label: 'Game development', 
			name: 'Pubg Stats Tracker', 
			shortDescription: 'Gaming software', 
			description: '',
			background: {
				image: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4) ), url(https://images3.alphacoders.com/816/816720.jpg)',
				position: 'center',
				size: 'cover'
			},
			status: 'Completed'
		},
		{ 
			label: 'HR Mangement', 
			name: 'HRM', 
			shortDescription: 'HRM Software', 
			description: '',
			background: {
				image: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(https://png.pngtree.com/thumb_back/fw800/back_pic/03/69/01/7957b416b366534.jpg)',
				position: 'center',
				size: 'cover'
			},
			status: 'Completed'
		},

		{ 
			label: 'Game development', 
			name: 'Escape The Room', 
			shortDescription: 'Web Based Escape Room Game', 
			description: '',
			background: {
				image: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4) ), url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)',
				position: 'center',
				size: 'cover'
			},
			status: 'Completed'
		}
  ];

  slideConfig = { 'slidesToShow': 3, 'dots': true };
  mobileSlideConfig = { 'slidesToShow': 1, 'dots': true };
}
