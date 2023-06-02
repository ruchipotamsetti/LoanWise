package com.example.nessApiGatewayjwt.service;

import org.springframework.stereotype.Service;

import com.example.nessApiGatewayjwt.model.User;

@Service
public interface UserService {

	public User findByEmailAndSecQuestionAndSecAnswer(String email,String secQuestion,String secAnswer);
	
	public User resetPassword(User user);
	
	
}
