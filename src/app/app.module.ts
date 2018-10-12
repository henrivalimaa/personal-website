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
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { SlickCarouselModule } from 'ngx-slick-carousel';
 
const cookieConfig:NgcCookieConsentConfig = {
  'cookie': {
    'domain': 'henrivalimaa.com'
  },
  'position': 'top',
  'theme': 'block',
  'palette': {
    'popup': {
      'background': '#020202',
      'text': '#ffffff'
    },
    'button': {
      'background': '#f1d600',
      'text': '#000000'
    }
  },
  'type': 'info',
  'content': {
    'message': 'This website uses cookies to improve your user experience. If you continue browsing, I assume that you accept my usage of cookies.',
    'dismiss': 'Accept',
    'deny': 'Deny',
    'link': 'Learn more',
    'href': 'https://cookiesandyou.com'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AboutViewComponent,
    PortfolioViewComponent,
    HomeViewComponent,
    BlogViewComponent,
    ContactFormComponent,
    SkillLevelIndicatorComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SlickCarouselModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
