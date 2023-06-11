import { Component } from '@angular/core';
import { SharedHeaderFooterService } from '../shared-header-footer.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private sharedService: SharedHeaderFooterService){
    
  }
  ngOnInit(){
    this.sharedService.parentProperty = false; 
  }

}
