import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
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
import { PluginsComponent } from './components/pages/plugins/plugins.component';
import { SolutionForIndustryComponent } from './components/pages/solution-for-industry/solution-for-industry.component';
import { SupplyChainManagementSystemComponent } from './components/pages/supply-chain-management-system/supply-chain-management-system.component';
import { CustomEcommerceWebsiteComponent } from './components/pages/custom-ecommerce-website/custom-ecommerce-website.component';
import { SanitaryManagementSystemComponent } from './components/pages/sanitary-management-system/sanitary-management-system.component';
import { SmsComponent } from './components/pages/Services/sms/sms.component';
import { NonMaskingSmsComponent } from './components/pages/Services/non-masking-sms/non-masking-sms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtpProviderBdComponent } from './components/pages/Services/otp-provider-bd/otp-provider-bd.component';
import { PromotionalSmsInBdComponent } from './components/pages/Services/promotional-sms-in-bd/promotional-sms-in-bd.component';
import { SmppGatewayProviderComponent } from './components/pages/Services/smpp-gateway-provider/smpp-gateway-provider.component';
import { DomainProviderInBdComponent } from './components/pages/Services/domain-provider-in-bd/domain-provider-in-bd.component';
import { UsaResellerHostingComponent } from './components/pages/Services/usa-reseller-hosting/usa-reseller-hosting.component';
import { SeoComponent } from './components/pages/Services/seo/seo.component';
import { RefundAndReturnPolicyComponent } from './components/pages/About/refund-and-return-policy/refund-and-return-policy.component';
import { TermsConditionsComponent } from './components/pages/About/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/About/privacy-policy/privacy-policy.component';
import { AboutMassDataComponent } from './components/pages/About/about-mass-data/about-mass-data.component';
import { HostingPrivacyPolicyComponent } from './components/pages/Hosting/hosting-privacy-policy/hosting-privacy-policy.component';
import { HostingServiceLevelAgreementComponent } from './components/pages/Hosting/hosting-service-level-agreement/hosting-service-level-agreement.component';
import { TosComponent } from './components/pages/Hosting/tos/tos.component';
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
    PluginsComponent,
    SolutionForIndustryComponent,
    SupplyChainManagementSystemComponent,
    CustomEcommerceWebsiteComponent,
    SanitaryManagementSystemComponent,
    SmsComponent,
    NonMaskingSmsComponent,
    OtpProviderBdComponent,
    PromotionalSmsInBdComponent,
    SmppGatewayProviderComponent,
    DomainProviderInBdComponent,
    UsaResellerHostingComponent,
    SeoComponent,
    RefundAndReturnPolicyComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    AboutMassDataComponent,
    HostingPrivacyPolicyComponent,
    HostingServiceLevelAgreementComponent,
    TosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
