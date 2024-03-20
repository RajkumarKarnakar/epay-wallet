package org.epay.wallet.repository;

import org.epay.wallet.model.BillPayment;
import org.epay.wallet.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BillPaymentDao extends JpaRepository<BillPayment, Integer> {
    public List<BillPayment> findByWallet(Wallet wallet);
}
