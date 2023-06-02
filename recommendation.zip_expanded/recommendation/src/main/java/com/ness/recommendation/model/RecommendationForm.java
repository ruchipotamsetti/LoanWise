package com.ness.recommendation.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecommendationForm {
	
	double interestRate;
	int loanAmt;
	int tenure;
	int salary;
	String occupationType;
	String pancardNo;
	String loanType;
	int creditScore;
	

}
