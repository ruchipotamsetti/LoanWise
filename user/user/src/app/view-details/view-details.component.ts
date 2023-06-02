import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
id: any;
constructor(private _recomSrv:RecommendationService, private _router:Router){}
selectedLoan:any;
ngOnInit(){

  this._router.navigate(['/viewdetails'])
  // window.location.href='/viewdetails';
  let loan = localStorage.getItem('selectedLoan')
  if(loan!=null){
    this.selectedLoan=JSON.parse(loan);
  }
  
  console.log(this.selectedLoan)
}




getDetailById(){
 
   
      this._recomSrv.getDetails(this.id).subscribe(
        data=>{
          
          
         
          console.log(data)
        },
        error=>{
          console.log(error)
        }
      )
    }
}
