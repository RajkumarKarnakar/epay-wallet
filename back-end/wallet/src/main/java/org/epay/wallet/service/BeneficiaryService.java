package org.epay.wallet.service;

import org.epay.wallet.exception.BeneficiaryException;
import org.epay.wallet.exception.CustomerException;
import org.epay.wallet.model.Beneficiary;

import java.util.List;


public interface BeneficiaryService {
	public Beneficiary addBeneficiary(Beneficiary beneficiary, String UniqueID)
			throws BeneficiaryException, CustomerException;

	public List<Beneficiary> viewBeneficiaries(String UniqueID) throws CustomerException, BeneficiaryException;

	public Beneficiary deleteBeneficiary(String UniqueID, Integer bId) throws CustomerException, BeneficiaryException;

}
