package com.ness.recommendation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ness.recommendation.model.AutoLoan;
import com.ness.recommendation.model.HomeLoan;
import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;

@Service
public interface AutoLoanService {

	public List<AutoLoan> getAll();
	
	public List<AutoLoan> getByRequestByForm(RecommendationForm recommendationForm, String autoType);
}
