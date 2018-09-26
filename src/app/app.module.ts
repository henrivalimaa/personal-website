import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { AboutViewComponent } from './about-view/about-view.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { RoutingModule } from './routing/routing.module';
import { SkillLevelIndicatorComponent } from './skill-level-indicator/skill-level-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutViewComponent,
    PortfolioViewComponent,
    HomeViewComponent,
    BlogViewComponent,
    ContactFormComponent,
    SkillLevelIndicatorComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
