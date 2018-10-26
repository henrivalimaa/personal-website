import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logoFadeAnimation } from "../animation/animations";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  animations: [logoFadeAnimation]
})
export class HomeViewComponent implements OnInit {
	private showLogo: boolean = false;
  private stars: Array<any> = [];

  constructor(private router : Router) { }

  ngOnInit() {
  	this.displayLogo();
    this.initStars();
  }

  displayLogo(): void {
  	setTimeout(() => {
           this.showLogo = true;
       }, 1000);
  }

  initStars(): void {
    for(let i = 0; i < 100; i++) {
      this.stars.push({ 
        left: getRandomPosition(0, window.innerWidth).toString() + 'px',
        top: getRandomPosition(0, window.innerHeight - 200).toString() + 'px',
        delay: getRandomDelay(0, 3).toString() + 's'
      });
    }

    function getRandomPosition(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomDelay(min, max) {
        return Math.random() * (max - min) + min;
    }
  }

  onSwipe(event : any) {
    this.router.navigate(['about']);
  }

}
