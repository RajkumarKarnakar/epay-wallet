package org.epay.wallet.repository;

import org.epay.wallet.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface accountDao extends JpaRepository<BankAccount, Integer> {

    BankAccount findByAccountNo(String accountNo);

}
