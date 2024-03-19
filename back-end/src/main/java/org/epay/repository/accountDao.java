package org.epay.repository;

import org.epay.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface accountDao extends JpaRepository<BankAccount, Integer> {

	BankAccount findByAccountNo(String accountNo);

}
