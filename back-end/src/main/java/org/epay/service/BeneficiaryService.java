package org.epay.service;

import org.epay.exception.BeneficiaryException;
import org.epay.exception.CustomerException;
import org.epay.model.Beneficiary;

import java.util.List;


public interface BeneficiaryService {
	public Beneficiary addBeneficiary(Beneficiary beneficiary, String UniqueID)
			throws BeneficiaryException, CustomerException;

	public List<Beneficiary> viewBeneficiaries(String UniqueID) throws CustomerException, BeneficiaryException;

	public Beneficiary deleteBeneficiary(String UniqueID, Integer bId) throws CustomerException, BeneficiaryException;

}
