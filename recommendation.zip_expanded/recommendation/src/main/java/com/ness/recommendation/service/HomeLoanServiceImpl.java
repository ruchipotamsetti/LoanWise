package com.ness.recommendation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ness.recommendation.model.HomeLoan;
import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;
import com.ness.recommendation.repo.HomeLoanRepo;

@Service
public class HomeLoanServiceImpl implements HomeLoanService{
	
	@Autowired
	HomeLoanRepo homeLoanRepo;

	@Override
	public List<HomeLoan> getAll() {
		// TODO Auto-generated method stub
		return homeLoanRepo.findAll();
	}

	@Override
	public List<HomeLoan> getByRequestByForm(RecommendationForm recommendationForm) {
		// TODO Auto-generated method stub
		//int creditScore=600;
		String occupationType = recommendationForm.getOccupationType();
		if(occupationType.equals("Salaried")){
			List<HomeLoan> recommended = homeLoanRepo.getByRequestForSalaried(recommendationForm.getInterestRate(), recommendationForm.getLoanAmt(), recommendationForm.getTenure(), recommendationForm.getSalary(), recommendationForm.getCreditScore());
			return recommended;
		}
		else {
			List<HomeLoan> recommended = homeLoanRepo.getByRequestForSelfEmployed(recommendationForm.getInterestRate(), recommendationForm.getLoanAmt(), recommendationForm.getTenure(), recommendationForm.getSalary(), recommendationForm.getCreditScore());
			return recommended;
		}
	}

}
