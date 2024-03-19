package org.epay.controller;

import jakarta.validation.Valid;
import org.epay.model.Customer;
import org.epay.model.dto.CustomerDTO;
import org.epay.model.dto.CustomerLoginDTO;
import org.epay.model.dto.CustomerOtpDTO;
import org.epay.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
public class CustomerController {
	@Autowired
	private CustomerService cService;

	// get otp if customer
	@PostMapping("/forgotPassword")
	public ResponseEntity<String> otpHandler(@Valid @RequestBody CustomerOtpDTO customerOTP) {
		return new ResponseEntity<String>(cService.checkCustomer(new CustomerOtpDTO()), HttpStatus.ACCEPTED);
	}

	// get otp if new customer
	@PostMapping("/signUp")
	public ResponseEntity<String> newCustomerOtpHandler(@Valid @RequestBody CustomerOtpDTO customerOTP) {
		return new ResponseEntity<String>(cService.checkNotACustomer(customerOTP), HttpStatus.ACCEPTED);
	}

	@PostMapping("/customer")
	public ResponseEntity<Customer> createCustomerHandler(@Valid @RequestBody Customer customer) {
		Customer newCustomer = cService.createCustomer(customer);
		return new ResponseEntity<Customer>(newCustomer, HttpStatus.ACCEPTED);
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginCustomerHandler(@Valid @RequestBody CustomerLoginDTO customerDTO) {
		return new ResponseEntity<String>(cService.customerLogin(customerDTO), HttpStatus.ACCEPTED);
	}

	@PostMapping("/customer/updatePassword")
	public ResponseEntity<String> updateCustomerPasswordHandler(@Valid @RequestBody CustomerLoginDTO customerDTO) {
		String message = cService.updateCustomerPassword(customerDTO);
		HttpStatus status = message.equals("Password changed successfully.") ? HttpStatus.ACCEPTED
				: HttpStatus.NOT_FOUND;
		return new ResponseEntity<>(message, status);
	}

	@PatchMapping("/logout/{uniqueId}")
	public ResponseEntity<String> logoutCustomerHandler(@PathVariable String uniqueId) {

		return new ResponseEntity<String>(cService.customerLogout(uniqueId), HttpStatus.ACCEPTED);
	}

	@GetMapping("/customer/{uniqueId}")
	public ResponseEntity<CustomerDTO> viewCustomerDetailsHandler(@PathVariable("uniqueId") String uniqueId) {
		CustomerDTO newCustomer = cService.viewCustomerDetails(uniqueId);
		System.out.println(newCustomer.toString());
		return new ResponseEntity<CustomerDTO>(newCustomer, HttpStatus.ACCEPTED);
	}

}
