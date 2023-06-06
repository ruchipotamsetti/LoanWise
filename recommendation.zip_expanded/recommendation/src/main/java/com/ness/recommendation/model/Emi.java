package com.ness.recommendation.model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Emi {

	@Id
	String emiId;
	int applicationId;
	String loanId;
	String email;
	LocalDate dateOfPayment;
	int emiNo;
	int beginningLoanBalance;
	int emi;
	int principal;
	int monthlyInterest;
	int outstandingBalance;
	String status;
	
}
