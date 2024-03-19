package org.epay.model.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class CustomerRegistrationDTO {
	private String firstName;
	private String lastName;
	private String mobileNumber;
	private String gender;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	private WalletDTO wallet;
	private String password;

}
