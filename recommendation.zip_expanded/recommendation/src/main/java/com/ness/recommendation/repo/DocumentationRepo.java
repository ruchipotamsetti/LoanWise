package com.ness.recommendation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ness.recommendation.model.Documentation;

@Repository
public interface DocumentationRepo extends JpaRepository<Documentation, String>{

}
