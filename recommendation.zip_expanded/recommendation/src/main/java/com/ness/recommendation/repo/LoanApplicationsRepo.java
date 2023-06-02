package com.ness.recommendation.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ness.recommendation.model.LoanApplications;

@Repository
public interface LoanApplicationsRepo extends JpaRepository<LoanApplications, Integer>{

	public List<LoanApplications> findByEmail(String email);
	
	@Transactional
	@Modifying
	@Query("update LoanApplications l set l.status='Approved' where l.applicationId=:applicationId")
	public void updateLoanStatus(int applicationId);
	
}
