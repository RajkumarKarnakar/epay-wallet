package org.epay.wallet.repository;

import org.epay.wallet.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletDao extends JpaRepository<Wallet, String> {

}
