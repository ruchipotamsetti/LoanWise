import { Component } from '@angular/core';
import { Documentation } from '../documentation.model';
import { AdminDashboardService } from '../admin-dashboard.service';
import { Router } from '@angular/router';
import { LoanApplications } from '../loanapplications.model';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private _router:Router, private _adminService: AdminDashboardService){}

ngOnInit(){
  //this.viewDocs();
  this.getAllApplications();
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


  approve(loanApplication:LoanApplications){
    //documentation.status=this.stat;
    this._adminService.approve(loanApplication).subscribe(
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
}