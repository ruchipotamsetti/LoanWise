package com.ness.recommendation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ness.recommendation.exception.PersonalLoanDoesNotExist;
import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;
import com.ness.recommendation.repo.PersonalLoanRepo;

@Service
public class PersonalServiceImpl implements PersonalLoanService{
	
	@Autowired
	PersonalLoanRepo personalLoanRepo;

	@Override
	public List<PersonalLoan> getAll() {
		// TODO Auto-generated method stub
		return personalLoanRepo.findAll();
	}

	@Override
	public List<PersonalLoan> getByRequest(double interestrate, int loanamt, String occupationType, int tenure,
			int salary, int creditScore) {
		// TODO Auto-generated method stub
		//int creditScore=600;
		if(occupationType.equalsIgnoreCase("Salaried")){
			List<PersonalLoan> recommended = personalLoanRepo.getByRequestForSalaried(interestrate, loanamt, tenure, salary, creditScore);
			return recommended;
		}
		else if(occupationType.equalsIgnoreCase("Self Employed")){
			//System.out.println("Inside Self employed");
			List<PersonalLoan> recommended = personalLoanRepo.getByRequestForSelfEmployed(interestrate, loanamt, tenure, salary, creditScore);
			return recommended;
		}
		else {
			return null;
		}
	}


//	public List<PersonalLoan> intRateTest(double interestRate){
//		
//		return personalLoanRepo.intRateTest(interestRate);
//	}
	
	
	
	@Override
	public List<PersonalLoan> getByRequestByForm(RecommendationForm recommendationForm) {
		// TODO Auto-generated method stub
		//int creditScore=600;
		String occupationType = recommendationForm.getOccupationType();
		List<PersonalLoan> recommended;
		if(occupationType.equals("Salaried")){
			recommended = personalLoanRepo.getByRequestForSalaried(recommendationForm.getInterestRate(), recommendationForm.getLoanAmt(), recommendationForm.getTenure(), recommendationForm.getSalary(), recommendationForm.getCreditScore());
			//return recommended;
		}
		else {
			recommended = personalLoanRepo.getByRequestForSelfEmployed(recommendationForm.getInterestRate(), recommendationForm.getLoanAmt(), recommendationForm.getTenure(), recommendationForm.getSalary(), recommendationForm.getCreditScore());
//			return recommended;
		}
//		if(recommended.isEmpty()) {
//			throw new PersonalLoanDoesNotExist("Personal does not exist");
//		}
		return recommended;
	}

	
}
