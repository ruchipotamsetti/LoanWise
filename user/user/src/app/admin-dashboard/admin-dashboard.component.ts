import { Component } from '@angular/core';
import { Documentation } from '../documentation.model';
import { AdminDashboardService } from '../admin-dashboard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private _router:Router, private _adminService: AdminDashboardService){}
  documentations:Documentation[]=[];
  pdfSrc='';
  poiSrc='';
  poaSrc='';
  ssSrc='';
  bsSrc='';
  dlSrc='';
  url='';
  showTable:boolean=false;
  viewDocs(){
    this._adminService.viewDocs().subscribe(
      data=>{
        alert('All docs retrieved')
        this.showTable=true;
        console.log(data);
        this.documentations=data;
        this.poiSrc = this.documentations[0].proofOfIdentity;
        this.poaSrc = this.documentations[0].proofOfAddress;
        this.bsSrc = this.documentations[0].bankStatement;
        this.ssSrc = this.documentations[0].salarySlip;
        this.dlSrc = this.documentations[0].driversLicense;
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
}