package org.epay.repository;

import org.epay.model.Transaction;
import org.epay.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TransactionDao extends JpaRepository<Transaction, Integer> {

	List<Transaction> findByTransactionDateBetween(LocalDateTime from, LocalDateTime to);

	List<Transaction> findByTransactionType(String type);

	List<Transaction> findByWallet(Wallet wallet);

}
