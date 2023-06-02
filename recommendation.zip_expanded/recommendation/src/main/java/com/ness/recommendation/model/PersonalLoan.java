package com.ness.recommendation.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PersonalLoan {

	@Id
	int personalLoanId;
	double interestRate;
	String bankName;
	int maxLoanAmt;
	int maxTenure;
	int processingFee;
	String prePaymentCharges;
	String description;
	int minSalaryForSalaried;
	int minSalaryForSelfEmployed;
	int minCreditScore;
	int contact;
}
