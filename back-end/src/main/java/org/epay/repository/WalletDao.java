package org.epay.repository;

import org.epay.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletDao extends JpaRepository<Wallet, String> {

}
