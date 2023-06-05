import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Documentation } from '../documentation.model';
import { Router } from '@angular/router';
import { DocumentationService } from '../documentation.service';
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {


  ngOnInit(){

  }

  docForm=new FormGroup({
    email:new FormControl(),
    proofOfIdentity:new FormControl(),
    proofOfAddress: new FormControl(),
    bankStatement: new FormControl(),
    salarySlip:new FormControl(),
    driversLicense: new FormControl()
  })


  documentation=new Documentation();
  email!: string;

  constructor(private _router:Router, private _docService: DocumentationService){}

  uploadDocs(){
    if(this.docForm.valid){
      console.log(this.documentation)
      this.email = localStorage.getItem("email")+'';
      this._docService.uploadDocs(this.documentation, this.email).subscribe(
        data=>{
          if(data!=null){
            console.log(data);
            alert('Doc Form Submitted!')
            // navigate to user dashboard, temporarily navigating to home
            this._router.navigate(['/home'])
          }
          else{
            alert("You have already uploaded documents");
            // navigate to user dashboard, temporarily navigating to home
            this._router.navigate(['/home'])
          }
          
          // this._router.navigate(["/"])
        },
        error=>{
          console.log(error)
        }
      )
    }
    else{
      alert('Enter all fields')
    }
  }
  pdfSrc: string | ArrayBuffer | null | undefined;
  onUploadPOI(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result; // Assign the PDF data to 'pdfSrc'
        this.documentation.proofOfIdentity = e.target.result; // Set the PDF data to the desired property if needed
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  onUploadPOA(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result; // Assign the PDF data to 'pdfSrc'
        this.documentation.proofOfAddress = e.target.result; // Set the PDF data to the desired property if needed
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  onUploadBS(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result; // Assign the PDF data to 'pdfSrc'
        this.documentation.bankStatement = e.target.result; // Set the PDF data to the desired property if needed
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  onUploadSS(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result; // Assign the PDF data to 'pdfSrc'
        this.documentation.salarySlip = e.target.result; // Set the PDF data to the desired property if needed
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  onUploadDL(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result; // Assign the PDF data to 'pdfSrc'
        this.documentation.driversLicense = e.target.result; // Set the PDF data to the desired property if needed
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}