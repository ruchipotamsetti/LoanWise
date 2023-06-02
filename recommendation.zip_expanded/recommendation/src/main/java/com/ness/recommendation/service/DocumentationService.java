package com.ness.recommendation.service;

import java.util.List;

import org.springframework.stereotype.Service;


import com.ness.recommendation.model.Documentation;

@Service
public interface DocumentationService {

	public Documentation saveDocumentation(String email, Documentation documentation);
	public List<Documentation> getAllDocumentation();
}
