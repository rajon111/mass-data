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

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
