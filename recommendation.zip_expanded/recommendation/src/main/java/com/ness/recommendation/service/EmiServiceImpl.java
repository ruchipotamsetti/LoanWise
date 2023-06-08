package com.ness.recommendation.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.ness.recommendation.model.Emi;
import com.ness.recommendation.model.LoanApplications;
import com.ness.recommendation.model.User;
import com.ness.recommendation.repo.EmiRepo;
import com.ness.recommendation.repo.UserRepository;

@Service
public class EmiServiceImpl implements EmiService{
	
	@Autowired
	EmiRepo emirepo;
	@Autowired
	UserRepository userRepository;
	
	List<Emi> emiList = new ArrayList<Emi>();
    
	@Override
	public String generateEmis(LoanApplications loanApplication) {
		// TODO Auto-generated method stub
		
		// Calculate monthly interest rate
        double monthlyInterestRate = loanApplication.getInterestRate()/100/12;

        
     // Calculate EMI (Equated Monthly Installment)
        int emi = (int) calculateEMI(loanApplication.getLoanAmount(), monthlyInterestRate, loanApplication.getTenure()*12);
        
        int outstandingBalance = loanApplication.getLoanAmount();
        LocalDate date = loanApplication.getAppliedOn();
        for (int month = 1; month <= loanApplication.getTenure()*12; month++) {
        	Emi emiDetails = new Emi();
            	
        	emiDetails.setEmiId(loanApplication.getApplicationId()+""+month);
        	
        	emiDetails.setApplicationId(loanApplication.getApplicationId());
            emiDetails.setEmail(loanApplication.getEmail());
            emiDetails.setEmiNo(month);
            emiDetails.setLoanId(loanApplication.getLoanId());
            //date
            date = date.plusMonths(1);
            emiDetails.setDateOfPayment(date);
            
        	int monthlyInterest = (int) (outstandingBalance * monthlyInterestRate);
        	emiDetails.setMonthlyInterest(monthlyInterest);
        	
            int principal = (int) (emi - monthlyInterest);
            emiDetails.setPrincipal(principal);
            
            if(month==1) {
            	emiDetails.setBeginningLoanBalance(loanApplication.getLoanAmount());
            }
            else {
            	emiDetails.setBeginningLoanBalance(outstandingBalance);
            }
            outstandingBalance -= principal;
            
            emiDetails.setEmi(emi);
            emiDetails.setOutstandingBalance(outstandingBalance);
            emiDetails.setStatus("Unpaid");
            
         
            emiList.add(emiDetails);
            
            
            
        }

        
        List<Emi> newList=new ArrayList<>();
        newList.addAll(emiList);
        System.out.println(newList.size());
        
        emirepo.saveAll(newList);
        
        
		return "Generated emis for Application "+loanApplication.getApplicationId();
	}
	
	public static double calculateEMI(int loanAmount, double monthlyInterestRate, int loanTenureMonths) {
        double onePlusInterestRatePower = Math.pow(1 + monthlyInterestRate, loanTenureMonths);
        double emi = loanAmount * monthlyInterestRate * onePlusInterestRatePower /
                (onePlusInterestRatePower - 1);
        return emi;
    }

	@Override
	public List<Emi> getEmisByEmail(String email) {
		// TODO Auto-generated method stub
		List<Emi> found = emirepo.findByEmail(email);
		if(found!= null) {
			return found;
		}
		return null;
	}
	
	@Override
	public List<Emi> getEmisByEmailAndApplicationId(String email, int applicationId) {
		 // TODO Auto-generated method stub
		 List<Emi> found = emirepo.findByEmailAndApplicationId(email, applicationId);
		 if(found!= null) {
		 return found;
		 }
		 return null;
	}

	@Override
	public String updateEmiStatus(String emiId, String status, String email) {
		// TODO Auto-generated method stub
		emirepo.updateEmiStatus(emiId, status);
		
		if(status.equalsIgnoreCase("Approved")) {
			User found = userRepository.findByEmail(email);
			if(found.getCreditScore()<900) {
				int creditScore = found.getCreditScore()+1;
				userRepository.updateCreditScore(creditScore, email);
			}
		}
		else if(status.equalsIgnoreCase("Rejected")) {
			User found = userRepository.findByEmail(email);
			if(found.getCreditScore()>300) {
				int creditScore = found.getCreditScore()-1;
				userRepository.updateCreditScore(creditScore, email);
			}
		}
		
		return emiId+" status set as "+status;
	}
}
