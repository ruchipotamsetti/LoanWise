package com.ness.recommendation.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
@ControllerAdvice
public class LoanExceptionHandler {
	
	@ExceptionHandler(PersonalLoanDoesNotExist.class)
	public ResponseEntity<String> personalLoanDoesNotExist(){
		return new ResponseEntity<String>("Such personal loan does not exist!", HttpStatus.NOT_ACCEPTABLE);
		
	}
	
	@ExceptionHandler(AutoLoanDoesNotExist.class)
	public ResponseEntity<String> autoLoanDoesNotExist(){
		return new ResponseEntity<String>("Such auto loan does not exist!", HttpStatus.NOT_ACCEPTABLE);
		
	}

}
