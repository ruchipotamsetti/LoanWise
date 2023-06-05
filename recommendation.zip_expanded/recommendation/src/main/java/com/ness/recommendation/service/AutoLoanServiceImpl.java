package com.ness.recommendation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ness.recommendation.model.AutoLoan;
import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;
import com.ness.recommendation.repo.AutoLoanRepo;

@Service
public class AutoLoanServiceImpl implements AutoLoanService{

	@Autowired
	AutoLoanRepo autoLoanRepo;
	
	@Override
	public List<AutoLoan> getAll() {
		// TODO Auto-generated method stub
		return autoLoanRepo.findAll();
	}

	@Override
	public List<AutoLoan> getByRequestByForm(RecommendationForm recommendationForm, String autoType) {
		// TODO Auto-generated method stub
		//int creditScore=600;
		String occupationType = recommendationForm.getOccupationType();
		if(occupationType.equals("Salaried")){
			List<AutoLoan> recommended = autoLoanRepo.getByRequestForSalaried(recommendationForm.getInterestRate(), recommendationForm.getLoanAmt(), recommendationForm.getTenure(), recommendationForm.getSalary(), recommendationForm.getCreditScore(), autoType);
			return recommended;
		}
		else {
			List<AutoLoan> recommended = autoLoanRepo.getByRequestForSelfEmployed(recommendationForm.getInterestRate(), recommendationForm.getLoanAmt(), recommendationForm.getTenure(), recommendationForm.getSalary(), recommendationForm.getCreditScore(), autoType);
			return recommended;
		}
	}

	
}
