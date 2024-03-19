package org.epay.repository;

import org.epay.model.CustomerSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerSessionDao extends JpaRepository<CustomerSession, Integer> {

	public CustomerSession findByUniqueId(String UniqueId);
}
