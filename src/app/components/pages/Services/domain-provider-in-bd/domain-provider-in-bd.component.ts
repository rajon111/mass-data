import { Component, OnInit,ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-domain-provider-in-bd',
  templateUrl: './domain-provider-in-bd.component.html',
  styleUrls: ['./domain-provider-in-bd.component.css']
})
export class DomainProviderInBdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
 
  disableEnable() {
    if (this.staticTabs?.tabs[2]) {
      this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
    }
  }

}
