package com.ness.recommendation.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ness.recommendation.model.AutoLoan;
import com.ness.recommendation.model.HomeLoan;

@Repository
public interface AutoLoanRepo extends JpaRepository<AutoLoan, Integer>{
	@Query("from AutoLoan p where p.interestRate<= :interestRate AND p.maxLoanAmt>= :loanAmt AND p.maxTenure>= :tenure AND p.minSalaryForSalaried<= :salary AND p.minCreditScore<= :creditScore AND p.autoType<= :autoType" )
	public List<AutoLoan> getByRequestForSalaried(double interestRate,int loanAmt,int tenure,int salary, int creditScore, String autoType);
	
	
	@Query("from AutoLoan p where p.interestRate<= :interestRate AND p.maxLoanAmt>= :loanAmt AND p.maxTenure>= :tenure AND p.minSalaryForSelfEmployed<= :salary AND p.minCreditScore<= :creditScore AND p.autoType<= :autoType" )
	public List<AutoLoan> getByRequestForSelfEmployed(double interestRate,int loanAmt,int tenure,int salary, int creditScore, String autoType);
}
