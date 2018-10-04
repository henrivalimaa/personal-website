import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.initMap();
  }

  initMap(): void {
  	google.charts.load('current', {
      'packages':['geochart'],
      'mapsApiKey': 'AIzaSyDCNVdNPxA_SUJ9H4UK3IKeQLnZvP0Wctw'
    });
    google.charts.setOnLoadCallback(this.drawRegionsMap);
        
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
  	 	datalessRegionColor: '#444444',
  	 	defaultColor: '#ce952d'
    };

    let chart = new google.visualization.GeoChart(document.getElementById('map_div'));

    chart.draw(data, options);
  }

}
