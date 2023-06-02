package com.ness.recommendation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ness.recommendation.model.LoanApplications;

@Service
public interface LoanApplicationsService {

	public LoanApplications saveApplication(LoanApplications loanApplication);
	public List<LoanApplications> getAllApplications();
	public List<LoanApplications> findByEmail(String email);
	public String updateLoanStatus(int applicationId);
	
}
