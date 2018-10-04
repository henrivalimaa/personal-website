import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
	private count: number = 0;

  constructor() { }

  ngOnInit() {
  	this.initMap();
  	this.startCountryCounter(30, 0);
  }

  initMap(): void {
  	google.charts.load('current', {
      'packages':['geochart'],
      'mapsApiKey': 'AIzaSyDCNVdNPxA_SUJ9H4UK3IKeQLnZvP0Wctw'
    });
    google.charts.setOnLoadCallback(this.drawRegionsMap);
        
  }

  startCountryCounter(count:number, index: number): void {
  	if(index === count + 1) {
  		return;
  	}

  	setTimeout(() => {
           this.count = index++;
           this.startCountryCounter(count, index++);
       }, 100);
  }

  drawRegionsMap(): void {
  	let data = google.visualization.arrayToDataTable([
      ['Country'],
      ['Germany'],
      ['France'],
      ['Russia'],
      ['Finland'],
      ['Norway'],
      ['Denmark'],
      ['Sweden'],
      ['Estonia'],
      ['Lithuania'],
      ['Thailand'],
      ['Japan'],
      ['Vietnam'],
      ['Latvia'],
      ['Cambodia'],
      ['Luxemburg'],
      ['Ireland'],
      ['Great Britain'],
      ['Spain'],
      ['Greece'],
      ['Belarus'],
      ['Belgium'],
      ['Latvia'],
      ['Bosnia and Herzegovina'],
      ['Czech Republic'],
      ['Bulgaria'],
      ['Poland'],
      ['Serbia']
    ]);

    let options = {
    	backgroundColor: 'transparent',
  	 	datalessRegionColor: '#353535',
  	 	defaultColor: '#ce952d'
    };

    let chart = new google.visualization.GeoChart(document.getElementById('map_div'));

    chart.draw(data, options);
  }

}
