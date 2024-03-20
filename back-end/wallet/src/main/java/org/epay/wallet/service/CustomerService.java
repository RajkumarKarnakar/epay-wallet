package org.epay.wallet.service;

import jakarta.validation.Valid;
import org.epay.wallet.model.dto.CustomerDTO;
import org.epay.wallet.model.dto.CustomerLoginDTO;
import org.epay.wallet.model.dto.CustomerOtpDTO;
import org.springframework.stereotype.Service;

import org.epay.wallet.model.Customer;
import org.epay.wallet.model.CustomerSession;


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
