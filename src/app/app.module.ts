import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home/home.component';
import { HomeSliderComponent } from './components/pages/home/home-slider/home-slider.component';
import { HomeFeatureComponent } from './components/pages/home/home-feature/home-feature.component';
import { HomeCustomContentComponent } from './components/pages/home/home-custom-content/home-custom-content.component';
import { HomeServicesComponent } from './components/pages/home/home-services/home-services.component';
import { HomeFeatureStepComponent } from './components/pages/home/home-feature-step/home-feature-step.component';
import { HomePortfolioComponent } from './components/pages/home/home-portfolio/home-portfolio.component';
import { HomeActivitiesComponent } from './components/pages/home/home-activities/home-activities.component';
import { HomeOurClientsComponent } from './components/pages/home/home-our-clients/home-our-clients.component';
import { BackToTopComponent } from './components/layouts/back-to-top/back-to-top.component';
import { HomeFeatureBoxComponent } from './components/pages/home/home-feature-box/home-feature-box.component';
import { HomeFeatureBox2Component } from './components/pages/home/home-feature-box2/home-feature-box2.component';
import { HomePriceTableComponent } from './components/pages/home/home-price-table/home-price-table.component';
import { ContactComponent } from './components/pages/contact/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeSliderComponent,
    HomeFeatureComponent,
    HomeCustomContentComponent,
    HomeServicesComponent,
    HomeFeatureStepComponent,
    HomePortfolioComponent,
    HomeActivitiesComponent,
    HomeOurClientsComponent,
    BackToTopComponent,
    HomeFeatureBoxComponent,
    HomeFeatureBox2Component,
    HomePriceTableComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
