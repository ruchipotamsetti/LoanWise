package com.ness.recommendation.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ness.recommendation.model.HomeLoan;
import com.ness.recommendation.model.PersonalLoan;

@Repository
public interface HomeLoanRepo extends JpaRepository<HomeLoan, Integer>{
	
	@Query("from HomeLoan p where p.interestRate<= :interestRate AND p.maxLoanAmt>= :loanAmt AND p.maxTenure>= :tenure AND p.minSalaryForSalaried<= :salary AND p.minCreditScore<= :creditScore" )
	public List<HomeLoan> getByRequestForSalaried(double interestRate,int loanAmt,int tenure,int salary, int creditScore);
	
	
	@Query("from HomeLoan p where p.interestRate<= :interestRate AND p.maxLoanAmt>= :loanAmt AND p.maxTenure>= :tenure AND p.minSalaryForSelfEmployed<= :salary AND p.minCreditScore<= :creditScore" )
	public List<HomeLoan> getByRequestForSelfEmployed(double interestRate,int loanAmt,int tenure,int salary, int creditScore);

	
}
