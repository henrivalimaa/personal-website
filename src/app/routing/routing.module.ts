import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { HomeViewComponent } from '../home-view/home-view.component';
import { PortfolioViewComponent } from '../portfolio-view/portfolio-view.component';
import { AboutViewComponent } from '../about-view/about-view.component';
import { BlogViewComponent } from '../blog-view/blog-view.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'portfolio', component: PortfolioViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'blog', component: BlogViewComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class RoutingModule { }
