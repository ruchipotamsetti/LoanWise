package com.ness.recommendation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ness.recommendation.model.Documentation;
import com.ness.recommendation.repo.DocumentationRepo;

@Service 
public class DocumentationServiceImplementation implements DocumentationService{

	@Autowired
	DocumentationRepo documentationRepo;
	
	@Override
	public Documentation saveDocumentation(String email, Documentation documentation) {
		// TODO Auto-generated method stub
		documentation.setEmail(email);
		documentationRepo.save(documentation);
		return documentation;
	}

	@Override
	public List<Documentation> getAllDocumentation() {
		// TODO Auto-generated method stub
		return documentationRepo.findAll();
	}

}
