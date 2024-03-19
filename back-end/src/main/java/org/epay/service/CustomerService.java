package org.epay.service;

import jakarta.validation.Valid;
import org.epay.model.dto.CustomerDTO;
import org.epay.model.dto.CustomerLoginDTO;
import org.epay.model.dto.CustomerOtpDTO;
import org.springframework.stereotype.Service;

import org.epay.model.Customer;
import org.epay.model.CustomerSession;


@Service
public interface CustomerService {
	public Customer createCustomer(Customer customer);

	public String customerLogin(@Valid CustomerLoginDTO customerDto);

	public String customerLogout(String uniqueId);

	public CustomerSession checkCustomerSession(String UniqueId);

	public CustomerDTO viewCustomerDetails(String UniqueId);

	public String updateCustomerPassword(CustomerLoginDTO customerDto);

	public String checkCustomer(CustomerOtpDTO customerOTP);

	public String checkNotACustomer(@Valid CustomerOtpDTO customerOTP);

}
