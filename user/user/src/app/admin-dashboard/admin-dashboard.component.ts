import { Component } from '@angular/core';
import { Documentation } from '../documentation.model';
import { AdminDashboardService } from '../admin-dashboard.service';
import { Router } from '@angular/router';
import { LoanApplications } from '../loanapplications.model';
import {AdminLoginService} from '../admin-login.service';
import {Emi} from '../emi.model';
import { SharedHeaderFooterService } from '../shared-header-footer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  showHeaderAndFooter=false;

  constructor(private _router:Router, private _adminService: AdminDashboardService,
    private adminLoginService:AdminLoginService, private sharedService:SharedHeaderFooterService){}

ngOnInit(){
  //this.viewDocs();
  if(localStorage.getItem('usertype')!='admin'){
    alert("Please login to view Admin Dashboard")
    this._router.navigate(['/adminLogin'])
  }
  this.getAllApplications();
  this.sharedService.parentProperty = false; 
}

  documentations:Documentation[]=[];
  pdfSrc='';
  poiSrc='';
  poaSrc='';
  ssSrc='';
  bsSrc='';
  dlSrc='';
  url='';
  showTable:boolean=false;
  userdoc = new Documentation();
  viewDocs(email:string){
    this._adminService.viewDocs().subscribe(
      data=>{
        alert('All docs retrieved')
        this.showTable=true;
        console.log(data);
        this.documentations=data;

        for(let documentation of this.documentations){
          if(documentation.email == email){
            this.userdoc = documentation;
          }

        }

        this.poiSrc = this.userdoc.proofOfIdentity;
        this.poaSrc = this.userdoc.proofOfAddress;
        this.bsSrc = this.userdoc.bankStatement;
        this.ssSrc = this.userdoc.salarySlip;
        this.dlSrc = this.userdoc.driversLicense;
      },
      error=>{
        console.log(error)
      }
    )
  }
  downloadFile(base64Data: string, filename: string) {
    base64Data = base64Data.replace(/^data:application\/pdf;base64,/, '');
    const blob = this.base64ToBlob(base64Data);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  base64ToBlob(base64Data: string): Blob {
    const binaryData = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uintArray[i] = binaryData.charCodeAt(i);
    }
    return new Blob([uintArray], { type: 'application/pdf' });
  }

 showEmiTable=false;

  approve(loanApplication:LoanApplications){
    //documentation.status=this.stat;
    this._adminService.approve(loanApplication).subscribe(
      data=>{
        console.log(data);
       // console.log(this.selectTeam);
        alert(data);
       
        this.generateEmitable(loanApplication);
        this.getAllApplications();
      },
      error=>{
        console.log(error);
      }
    )
  }

  reject(loanApplication:LoanApplications){
    //documentation.status=this.stat;
    this._adminService.reject(loanApplication).subscribe(
      data=>{
        console.log(data);
       // console.log(this.selectTeam);
       
        alert(data);
        this.getAllApplications();
      },
      error=>{
        console.log(error);
      }
    )
  }

  email:string='';
  applications: LoanApplications[] = [];
  getAllApplications(){
    this.email = localStorage.getItem("email")+'';
    console.log(this.email)
    this._adminService.getApplications().subscribe(
      data=>{
        this.applications = JSON.parse(JSON.stringify(data))

        console.log(data)
        console.log("this is ="+this.applications);
      },
      error=>{
        console.log(error)
      }
    )
  }
  logout() {
    this.adminLoginService.logout();
  }


  generateEmitable(loanApplication:LoanApplications){
    this._adminService.generateEmi(loanApplication).subscribe(
      data=>{
        console.log(data);
        
      },
      error=>{
        console.log(error);
      }
    )
  }

  emiTable:Emi[]=[];
  getEmiTable(email:string, applicationId:number){

    this._adminService.getEmi(email, applicationId).subscribe(
      data=>{
        console.log(data);
        this.showEmiTable=true;
       this.emiTable = data;
       this.emiTable.sort((a, b) =>  a.emiNo - b.emiNo);
      },
      error=>{
        console.log(error);
      }
    )
  }

  approveEmi(emi:Emi){
    let status = "Approved"
    emi.status = status;
    this._adminService.updateEmiStatus(emi).subscribe(
      data=>{
        console.log(data)
        //this.getEmiTable(email, applicationId);
      },
      error=>{
        console.log(error);
      }
    )
  }

  rejectEmi(emi:Emi){
    let status = "Rejected"
    emi.status = status;
    this._adminService.updateEmiStatus(emi).subscribe(
      data=>{
        console.log(data)
        //this.getEmiTable(email, applicationId);
      },
      error=>{
        console.log(error);
      }
    )
  }

  addLoan(){
    this._router.navigate(['/addLoans'])
  }
  
}