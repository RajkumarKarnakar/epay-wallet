package org.epay.repository;

import org.epay.model.BillPayment;
import org.epay.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BillPaymentDao extends JpaRepository<BillPayment, Integer> {
	public List<BillPayment> findByWallet(Wallet wallet);
}
