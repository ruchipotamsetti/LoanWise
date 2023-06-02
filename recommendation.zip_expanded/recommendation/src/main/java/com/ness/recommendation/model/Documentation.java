package com.ness.recommendation.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Documentation {

	@Id
	String email;
	@Lob
	String proofOfIdentity;
	@Lob
	String proofOfAddress;
	@Lob
	String bankStatement;
	@Lob
    String salarySlip;
	@Lob
    String driversLicense;

}
