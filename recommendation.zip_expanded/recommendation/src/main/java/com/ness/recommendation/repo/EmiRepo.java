package com.ness.recommendation.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ness.recommendation.model.Emi;

@Repository
public interface EmiRepo extends JpaRepository<Emi, String>{

	public List<Emi> findByEmailAndApplicationId(String email, int applicationId);
}
