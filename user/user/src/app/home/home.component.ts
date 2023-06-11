import { Component } from '@angular/core';
import { RecommendForm } from '../RecommendForm.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loanType='';
  constructor(private _router:Router){

  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}

  selectType(type:string){
    
    this.loanType = type;
    localStorage.setItem('loanType',this.loanType)
    if(localStorage.getItem('email')){
      this._router.navigate(['/recomform'])
          }
      else{
        alert('Login to see recommendations')
        this._router.navigate(['/login'])
      }
    }
  //this.displayForm();
  }


