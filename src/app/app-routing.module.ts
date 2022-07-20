import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component';
import { ContactComponent } from './components/pages/contact/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
