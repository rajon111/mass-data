import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component';
import { ContactComponent } from './components/pages/contact/contact/contact.component';
import { PluginsComponent } from './components/pages/plugins/plugins.component';
import { SolutionForIndustryComponent } from './components/pages/solution-for-industry/solution-for-industry.component';
import { SupplyChainManagementSystemComponent } from './components/pages/supply-chain-management-system/supply-chain-management-system.component';
import { CustomEcommerceWebsiteComponent } from './components/pages/custom-ecommerce-website/custom-ecommerce-website.component';
import { SanitaryManagementSystemComponent } from './components/pages/sanitary-management-system/sanitary-management-system.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
