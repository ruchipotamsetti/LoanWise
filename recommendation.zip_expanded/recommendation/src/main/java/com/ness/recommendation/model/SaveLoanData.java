package com.ness.recommendation.model;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveLoanData {
	
	String loanId;
    String image;
    String url;
    String bankName;
    double interestRate;
    int maxLoanAmt;
    int maxTenure;
    int processingFee;
    String prePaymentCharges;
    String description;
    int minSalaryForSalaried;
    int minSalaryForSelfEmployed;
    int minCreditScore;
    String contact;
    double emiPerMonth;
    String autoType;

    }










