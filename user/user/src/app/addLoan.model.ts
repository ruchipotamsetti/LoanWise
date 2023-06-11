export class LoanForm {
    loanId: string='';
    image: string='';
    url: string='';
    bankName: string='';
    interestRate!: number;
    maxLoanAmt!: number;
    maxTenure!: number;
    processingFee!: number;
    prePaymentCharges!: string;
    description!: string;
    minSalaryForSalaried!: number;
    minSalaryForSelfEmployed!: number;
    minCreditScore!: number;
    contact!: string;
    emiPerMonth!: number;
    autoType!:string;
  }