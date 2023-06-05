package com.ness.recommendation.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import ch.qos.logback.core.joran.spi.NoAutoStart;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class AutoLoan {

	@Id
	String loanId;
	String image;
	String url;
	String autoType;
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
	int contact;
	
}
