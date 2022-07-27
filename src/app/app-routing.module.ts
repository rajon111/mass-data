import { TosComponent } from './components/pages/Hosting/tos/tos.component';
import { HostingServiceLevelAgreementComponent } from './components/pages/Hosting/hosting-service-level-agreement/hosting-service-level-agreement.component';
import { HostingPrivacyPolicyComponent } from './components/pages/Hosting/hosting-privacy-policy/hosting-privacy-policy.component';
import { AboutMassDataComponent } from './components/pages/About/about-mass-data/about-mass-data.component';
import { PrivacyPolicyComponent } from './components/pages/About/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/About/terms-conditions/terms-conditions.component';
import { RefundAndReturnPolicyComponent } from './components/pages/About/refund-and-return-policy/refund-and-return-policy.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component';
import { ContactComponent } from './components/pages/contact/contact/contact.component';
import { PluginsComponent } from './components/pages/plugins/plugins.component';
import { SolutionForIndustryComponent } from './components/pages/solution-for-industry/solution-for-industry.component';
import { SupplyChainManagementSystemComponent } from './components/pages/supply-chain-management-system/supply-chain-management-system.component';
import { CustomEcommerceWebsiteComponent } from './components/pages/custom-ecommerce-website/custom-ecommerce-website.component';
import { SanitaryManagementSystemComponent } from './components/pages/sanitary-management-system/sanitary-management-system.component';
import { SmsComponent } from './components/pages/Services/sms/sms.component';
import { NonMaskingSmsComponent } from './components/pages/Services/non-masking-sms/non-masking-sms.component';
import { OtpProviderBdComponent } from './components/pages/Services/otp-provider-bd/otp-provider-bd.component';
import { PromotionalSmsInBdComponent } from './components/pages/Services/promotional-sms-in-bd/promotional-sms-in-bd.component';
import { SmppGatewayProviderComponent } from './components/pages/Services/smpp-gateway-provider/smpp-gateway-provider.component';
import { DomainProviderInBdComponent } from './components/pages/Services/domain-provider-in-bd/domain-provider-in-bd.component';
import { UsaResellerHostingComponent } from './components/pages/Services/usa-reseller-hosting/usa-reseller-hosting.component';
import { SeoComponent } from './components/pages/Services/seo/seo.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact-us',
    component:ContactComponent
  },
  {path:'plugins', component:PluginsComponent},
  {path:'software-solution-for-industry', component:SolutionForIndustryComponent},
  {path:'supply-chain-management-system', component:SupplyChainManagementSystemComponent},
  {path:'custom-ecommerce-website', component:CustomEcommerceWebsiteComponent},
  {path:'sanitary-Management-System', component:SanitaryManagementSystemComponent},
  {path:'masking-sms-in-bd', component:SmsComponent},
  {path:'non-masking-sms-in-bd', component:NonMaskingSmsComponent},
  {path:'otp-provider-in-bd', component:OtpProviderBdComponent},
  {path:'promotional-sms-in-bd', component:PromotionalSmsInBdComponent},
  {path:'smpp-gateway-provider-in-bd', component:SmppGatewayProviderComponent},
  {path:'domain-provider-in-bd', component:DomainProviderInBdComponent},
  {path:'usa-reseller-hosting-in-bd', component:UsaResellerHostingComponent},
  {path:'refund-and-return-policy', component:RefundAndReturnPolicyComponent},
  {path:'terms-&-conditions', component:TermsConditionsComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'about-us', component:AboutMassDataComponent},
  {path:'seo-service-provider-in-bd', component:SeoComponent},
  {path:'hosting-privacy-policy', component:HostingPrivacyPolicyComponent},
  {path:'hosting-service-level-agreement', component:HostingServiceLevelAgreementComponent},
  {path:'hosting-terms-of-service-tos', component:TosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
