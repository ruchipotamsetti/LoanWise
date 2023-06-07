package com.ness.recommendation.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.ness.recommendation.model.Emi;

@Repository
public interface EmiRepo extends JpaRepository<Emi, String>{

	public List<Emi> findByEmail(String email);
	public List<Emi> findByEmailAndApplicationId(String email, int applicationId);
	
	@Transactional
	@Modifying
	@Query("update Emi e set e.status=:status where e.emiId=:emiId")
	public void updateEmiStatus(String emiId, String status);
}
