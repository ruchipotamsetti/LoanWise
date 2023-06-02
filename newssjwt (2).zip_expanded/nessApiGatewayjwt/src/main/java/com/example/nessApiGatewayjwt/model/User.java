package com.example.nessApiGatewayjwt.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

	@Id
	String email;
	String password;
	String secQuestion;
	String secAnswer;
	String firstName;
	String lastName;
	String panCard;
	String mobile;
	String address;
	String city;
	String state;
	String country;
	String pincode;
	String occupationType;
	int creditScore;
}

