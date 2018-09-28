import { Component, OnInit } from '@angular/core';

import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {
	private portfolioItems: Array<any>;

  constructor() { }

  ngOnInit() {
  	this.portfolioItems = [
			{ 
				label: 'Education Technologies', 
				name: 'YipTree', 
				shortDescription: 'Personal Learning Environment', 
				description: '', 
				background: {
					image: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url(https://pro2-bar-s3-cdn-cf3.myportfolio.com/84bc6461bb2abbb65ae9e645f8f60b7d/464b0568-94e4-488f-b2a2-fb887e973fbd_rw_1920.jpg?h=1008b1b34b97f91924eb0755587cfaef)',
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
					image: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8) ), url(https://4.bp.blogspot.com/-Ry_TXQPqKOg/WO3JhNBRciI/AAAAAAAApI4/hJPri1K-Ks0x9tF2vS6VMZdtMU66kIbyQCLcB/s1600/IMG_5382.jpg)',
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
					image: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9) ), url(http://www.jonesbarber.fi/wp-content/uploads/2016/06/homepagelogo-e1472041489437.png)',
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
					image: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9) ), url(https://images3.alphacoders.com/816/816720.jpg)',
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
					image: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9) ), url(http://blogs.shu.edu/weekender/files/2016/10/ESCAPE-LOGO-730x445.jpg)',
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
					image: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9) ), url(http://www.jonesbarber.fi/wp-content/uploads/2016/06/homepagelogo-e1472041489437.png)',
					position: 'center',
					size: 'cover'
				},
				status: 'Completed'
			}	
  	];
  }

}
