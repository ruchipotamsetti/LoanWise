package com.ness.recommendation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ness.recommendation.model.HomeLoan;
import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;

@Service
public interface HomeLoanService {
	public List<HomeLoan> getAll();
	public List<HomeLoan> getByRequestByForm(RecommendationForm recommendationForm);
}
