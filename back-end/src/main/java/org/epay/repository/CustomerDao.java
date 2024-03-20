package org.epay.repository;

import org.epay.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerDao extends JpaRepository<Customer, Integer> {
	public Customer findByMobileNumber(String mobileNumber);

	public Customer findByMobileNumberAndPassword(String mobileNumber, String password);

}