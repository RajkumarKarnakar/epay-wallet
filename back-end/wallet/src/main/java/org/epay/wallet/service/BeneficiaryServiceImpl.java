package org.epay.wallet.service;

import org.epay.wallet.exception.BeneficiaryException;
import org.epay.wallet.exception.CustomerException;
import org.epay.wallet.model.Beneficiary;
import org.epay.wallet.model.Customer;
import org.epay.wallet.model.CustomerSession;
import org.epay.wallet.repository.BeneficiaryDAO;
import org.epay.wallet.repository.CustomerDao;
import org.epay.wallet.repository.CustomerSessionDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BeneficiaryServiceImpl implements BeneficiaryService {
	@Autowired
	@SuppressWarnings(value = { "unused" })
	private CustomerSessionDao sessionDAO;

	@Autowired
	private BeneficiaryDAO beneficiaryDAO;

	@Autowired
	private CustomerSessionDao csDao;

	@Autowired
	private CustomerDao cDao;

	@Override
	public Beneficiary addBeneficiary(Beneficiary beneficiary, String UniqueID)
			throws BeneficiaryException, CustomerException {

		CustomerSession cSession = csDao.findByUniqueId(UniqueID);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer existingCustomer = opt.get();
			System.out.println(beneficiary.toString());
			beneficiary.setCustomer(existingCustomer);
			return beneficiaryDAO.save(beneficiary);
		}
		{
			throw new CustomerException("customer is not logged in with given sourceMobileNo");
		}

	}

	@Override
	public List<Beneficiary> viewBeneficiaries(String UniqueID) throws CustomerException, BeneficiaryException {
		CustomerSession cSession = csDao.findByUniqueId(UniqueID);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer existingCustomer = opt.get();
			List<Beneficiary> beneficiaries = beneficiaryDAO.findByCustomer(existingCustomer);

			if (beneficiaries != null) {
				return beneficiaries;

			} else {
				throw new BeneficiaryException("No benebficiary yet");
			}

		}
		{
			throw new CustomerException("customer is not logged in with given sourceMobileNo");
		}

	}

	@Override
	public Beneficiary deleteBeneficiary(String UniqueID, Integer bId) throws CustomerException, BeneficiaryException {
		CustomerSession cSession = csDao.findByUniqueId(UniqueID);
		if (cSession != null) {
			Optional<Beneficiary> opt = beneficiaryDAO.findById(bId);
			if (opt.isPresent()) {
				Beneficiary existingBeneficiary = opt.get();
				beneficiaryDAO.delete(existingBeneficiary);
				return existingBeneficiary;
			} else {
				throw new BeneficiaryException("no beneficiary available with the given id");
			}

		}
		{
			throw new CustomerException("customer is not logged in with given sourceMobileNo");
		}

	}

}
