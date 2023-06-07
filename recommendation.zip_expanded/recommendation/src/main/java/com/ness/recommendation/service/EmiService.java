package com.ness.recommendation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ness.recommendation.model.Emi;
import com.ness.recommendation.model.LoanApplications;

@Service
public interface EmiService {

	public String generateEmis(LoanApplications loanApplication);
	public List<Emi> getEmisByEmail(String email);
	
}
