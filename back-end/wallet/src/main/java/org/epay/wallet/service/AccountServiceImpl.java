package org.epay.wallet.service;

import org.epay.wallet.exception.CustomerException;
import org.epay.wallet.model.BankAccount;
import org.epay.wallet.model.Customer;
import org.epay.wallet.model.CustomerSession;
import org.epay.wallet.model.Wallet;
import org.epay.wallet.repository.CustomerDao;
import org.epay.wallet.repository.WalletDao;
import org.epay.wallet.repository.accountDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	private CustomerService csDao;

	@Autowired
	private CustomerDao cDao;

	@Autowired
	private accountDao bDao;

	@Autowired
	private WalletDao wDao;

	@Override
	public Customer addAccount(BankAccount Account, String uniqueId) {

		CustomerSession session = csDao.checkCustomerSession(uniqueId);

		if (session != null) {
			Optional<Customer> opt = cDao.findById(session.getCustomerId());
			Customer customer = opt.get();

			System.out.println(Account.getAccountNo());
			Account.setWallet(customer.getWallet());
			// add bank account
			customer.getWallet().getBanks().add(Account);
			cDao.save(customer);
			return customer;

		} else {
			throw new CustomerException("Customer not logged in");
		}

	}

	@Override
	public Customer deleteAccount(Integer accountId, String uniqueId) {
		CustomerSession session = csDao.checkCustomerSession(uniqueId);

		if (session != null) {
			Optional<BankAccount> opt = bDao.findById(accountId);
			if (opt.isPresent()) {
				bDao.delete(opt.get());
				Optional<Customer> optc = cDao.findById(session.getId());
				Customer customer = optc.get();
				return customer;
			} else {
				throw new CustomerException("Wrong bank id");
			}

		} else {
			throw new CustomerException("Customer not logged in");
		}

	}

	@Override
	public BankAccount ViewAccount(String accountNo, String uniqueId) {
		CustomerSession session = csDao.checkCustomerSession(uniqueId);
		BankAccount bankAccount = null;

		if (session != null) {
			Optional<Customer> opt = cDao.findById(session.getId());
			Customer customer = opt.get();

			List<BankAccount> banks = customer.getWallet().getBanks();

			for (BankAccount bank : banks) {
				if (bank.getAccountNo().equals(accountNo)) {
					bankAccount = bank;
				}
			}

			// return desired bank account
			if (bankAccount != null) {
				return bankAccount;
			} else {
				throw new CustomerException("No bank account available with this account number");
			}

		} else {
			throw new CustomerException("Customer not logged in");
		}
	}

	@Override
	public List<BankAccount> ViewAllAccount(String walletId, String uniqueId) {
		CustomerSession session = csDao.checkCustomerSession(uniqueId);
		if (session != null) {
			Optional<Wallet> opt = wDao.findById(walletId);
			if (opt.isPresent()) {
				List<BankAccount> banks = opt.get().getBanks();
				return banks;
			} else {
				throw new CustomerException("Wronge wallet id");
			}
		} else {
			throw new CustomerException("Customer not logged in");
		}

	}

	@Override
	public String showBalance(String mobileNo) {
		Customer customer = cDao.findByMobileNumber(mobileNo);
		if (customer != null) {
			// prashant
			return customer.getWallet().getBalance().toString();
		} else {
			throw new CustomerException("No customer found with mobile number " + mobileNo);
		}
	}

}
