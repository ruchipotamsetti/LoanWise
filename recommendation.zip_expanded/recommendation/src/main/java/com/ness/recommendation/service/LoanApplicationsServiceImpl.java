package com.ness.recommendation.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ness.recommendation.model.LoanApplications;
import com.ness.recommendation.repo.LoanApplicationsRepo;

@Service
public class LoanApplicationsServiceImpl implements LoanApplicationsService{

	@Autowired
	LoanApplicationsRepo loanApplicationsRepo;
	
	@Override
	public LoanApplications saveApplication(LoanApplications loanApplication) {
		// TODO Auto-generated method stub
		LoanApplications found = loanApplicationsRepo.findByLoanIdAndEmail(loanApplication.getLoanId(), loanApplication.getEmail());
		if(found != null) {
			return null;
		}
		loanApplication.setAppliedOn(LocalDate.now());
		loanApplication.setStatus("Pending");
		loanApplicationsRepo.save(loanApplication);
		return loanApplication;
	}

	@Override
	public List<LoanApplications> getAllApplications() {
		// TODO Auto-generated method stub
		return loanApplicationsRepo.findAll();
	}

	@Override
	public List<LoanApplications> findByEmail(String email) {
		// TODO Auto-generated method stub
		List<LoanApplications>found = loanApplicationsRepo.findByEmail(email);
		if(found!=null) {
			return found;
		}
		return null;
	}

	@Override
	public String updateAsApproved(int applicationId) {
		// TODO Auto-generated method stub
		
		loanApplicationsRepo.updateAsApproved(applicationId);
		return "Loan Application "+applicationId+" approved!";
		
	}

	@Override
	public String updateAsRejected(int applicationId) {
		// TODO Auto-generated method stub
		
		loanApplicationsRepo.updateAsRejected(applicationId);
		return "Loan Application "+applicationId+" rejected!";
		
	}

	
}
