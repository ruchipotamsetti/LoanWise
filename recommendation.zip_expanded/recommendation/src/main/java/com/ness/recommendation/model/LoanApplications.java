package com.ness.recommendation.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoanApplications {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	int applicationId;
	String email;
	String loanType;
    String loanId;
    int loanAmount;
    String bankName;
    String status;
    double emiPerMonth;

}
