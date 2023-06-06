export class LoanApplications{
    applicationId!:number;
	email!:string;
	loanType!:string;
    loanId!:string;
    loanAmount!:number;
    bankName!:string;
    status!:string;
    emiPerMonth=0;
    tenure=0;
    interestRate=0.0;
    appliedOn!:Date;
}