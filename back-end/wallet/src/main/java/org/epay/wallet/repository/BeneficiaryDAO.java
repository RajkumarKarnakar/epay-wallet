package org.epay.wallet.repository;

import org.epay.wallet.model.Beneficiary;
import org.epay.wallet.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeneficiaryDAO extends JpaRepository<Beneficiary, Integer> {
    List<Beneficiary> findByMobileNo(String mobileNo);

    List<Beneficiary> findByCustomer(Customer customer);

}
