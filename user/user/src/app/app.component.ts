import { Component } from '@angular/core';
import { SharedHeaderFooterService } from './shared-header-footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user';
  showHeaderAndFooter= true;

 sharedService:SharedHeaderFooterService;
constructor(shared :SharedHeaderFooterService){
  this.sharedService=shared;
  this.sharedService.parentProperty = true; // Set the initial value

}

}
