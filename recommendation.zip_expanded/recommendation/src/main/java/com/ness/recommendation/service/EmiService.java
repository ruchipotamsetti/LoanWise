package com.ness.recommendation.service;

import org.springframework.stereotype.Service;

import com.ness.recommendation.model.LoanApplications;

@Service
public interface EmiService {

	public String generateEmis(LoanApplications loanApplication);
}
