package com.ness.recommendation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;

@Service
public interface PersonalLoanService {

	public List<PersonalLoan> getAll();
	
	//public List<PersonalLoan> getByRequest(RecommendationForm recommendationForm);
	
	public List<PersonalLoan> getByRequest(double interestrate,int loanamt,String occupationType,int tenure,int salary);

	public List<PersonalLoan> getByRequestByForm(RecommendationForm recommendationForm);


//	public List<PersonalLoan> intRateTest(double interestRate);
	
}
