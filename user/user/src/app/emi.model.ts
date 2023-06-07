export class Emi {
    emiId: string='';
    applicationId!: number;
    loanId!: string;
    email!: string;
    dateOfPayment!: string; // Assuming you receive the date as a string from the backend
    emiNo!: number;
    beginningLoanBalance!: number;
    emi!: number;
    principal!: number;
    monthlyInterest!: number;
    outstandingBalance!: number;
    status!: string;
  }
  