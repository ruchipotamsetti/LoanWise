package com.ness.recommendation.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ness.recommendation.model.PersonalLoan;
import com.ness.recommendation.model.RecommendationForm;


@Repository
public interface PersonalLoanRepo extends JpaRepository<PersonalLoan, Integer>{
	
	
	
	@Query("from PersonalLoan p where p.interestRate<= :interestRate AND p.maxLoanAmt>= :loanAmt AND p.maxTenure>= :tenure AND p.minSalaryForSalaried<= :salary AND p.minCreditScore<= :creditScore" )
	public List<PersonalLoan> getByRequestForSalaried(double interestRate,int loanAmt,int tenure,int salary, int creditScore);
	
	
	@Query("from PersonalLoan p where p.interestRate<= :interestRate AND p.maxLoanAmt>= :loanAmt AND p.maxTenure>= :tenure AND p.minSalaryForSelfEmployed<= :salary AND p.minCreditScore<= :creditScore" )
	public List<PersonalLoan> getByRequestForSelfEmployed(double interestRate,int loanAmt,int tenure,int salary, int creditScore);


//	@Query("from PersonalLoan p where p.interestRate<= :interestRate" )
//	public List<PersonalLoan> intRateTest(double interestRate);
	


}
