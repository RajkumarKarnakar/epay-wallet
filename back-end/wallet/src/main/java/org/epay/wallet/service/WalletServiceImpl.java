package org.epay.wallet.service;

import org.epay.wallet.exception.CustomerException;
import org.epay.wallet.model.*;
import org.epay.wallet.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {

	@SuppressWarnings("unused")
	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private accountDao aDao;

	@Autowired
	private WalletDao wDao;

	@Autowired
	private CustomerDao cDao;

	@Autowired
	private TransactionDao tDao;

	@Autowired
	private CustomerSessionDao csDao;

	@SuppressWarnings("unused")
	@Autowired
	private CustomerService csSession;

	@Override
	public String showBalance(String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer customer = opt.get();
			return "customer Balance is : " + customer.getWallet().getBalance();

		} else {
			throw new CustomerException("User not logged in with this number!");
		}

	}

	@Override
	public Wallet addMoneytoWallet(String BankId, Long amount, String uniqueId) {

		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer customer = opt.get();

			Optional<BankAccount> optbank = Optional.ofNullable(aDao.findByAccountNo(BankId));
			BankAccount bank = optbank.get();

			// transaction
			Wallet wallet = customer.getWallet();

			if (bank.getBalance() >= amount) {

				long revisedwalletbalance = wallet.getBalance() + amount;
				long revisedBankBalance = bank.getBalance() - amount;

				bank.setBalance(revisedBankBalance);
				wallet.setBalance(revisedwalletbalance);

				Transaction transaction = new Transaction();
				transaction.setAmount(amount);
				transaction.setDescription("Money Recived from Bank XXXX" + bank.getAccountNo().substring(8));
				transaction.setRecieversWalletId(wallet.getWalletId());
				transaction.setTransactionDate(LocalDateTime.now());
				transaction.setTransactionType("Recived Money");
				transaction.setWallet(wallet);
				tDao.save(transaction);

				cDao.save(customer);
				return customer.getWallet();

			} else {
				throw new CustomerException("Insufficient bank balance");
			}

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

	@Override
	public Wallet transferToBank(String BankId, Long amount, String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer customer = opt.get();

			Optional<BankAccount> optbank = Optional.ofNullable(aDao.findByAccountNo(BankId));
			BankAccount bank = optbank.get();

			// transaction
			Wallet wallet = customer.getWallet();

			if (wallet.getBalance() >= amount) {

				long revisedwalletbalance = wallet.getBalance() - amount;
				long revisedBankBalance = bank.getBalance() + amount;

				bank.setBalance(revisedBankBalance);
				wallet.setBalance(revisedwalletbalance);

				cDao.save(customer);
				return customer.getWallet();

			} else {
				throw new CustomerException("Insufficient balance in wallet");
			}

		} else {
			throw new CustomerException("User not logged in!");
		}
	}

	// wallet to wallet
	@Override
	public Wallet fundTransfer(String sourceMobileNo, String targetMobileNo, Long amount, String uniqueId) {
		if (!sourceMobileNo.equals(targetMobileNo)) {
			CustomerSession cSession = csDao.findByUniqueId(uniqueId);
			if (cSession != null) {
				Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
				Customer transferor = opt.get();

				if (transferor.getMobileNumber().equals(sourceMobileNo)) {
					Customer transforee = cDao.findByMobileNumber(targetMobileNo);

					// check balance
					if (transferor.getWallet().getBalance() >= amount) {

						Long revisedBankBalanceROR = transferor.getWallet().getBalance() - amount;
						Long revisedBankBalanceREE = transforee.getWallet().getBalance() + amount;
						transferor.getWallet().setBalance(revisedBankBalanceROR);
						transforee.getWallet().setBalance(revisedBankBalanceREE);

						// add transaction
                        Transaction transaction = new Transaction();
						transaction.setAmount(amount);
						transaction.setDescription("Money sent to " + transforee.getWallet().getWalletId());
						transaction.setRecieversWalletId(transforee.getWallet().getWalletId());
						transaction.setTransactionDate(LocalDateTime.now());
						transaction.setTransactionType("Send Money");
						transaction.setWallet(transferor.getWallet());
						tDao.save(transaction);

						cDao.save(transforee);
						cDao.save(transferor);
						return transferor.getWallet();

					} else {
						throw new CustomerException("Insufficient wallet balance!");
					}

				} else {
					throw new CustomerException("customer is not logged in with given sourceMobileNo");
				}

			} else {
				throw new CustomerException("User not logged in!");
			}
		} else {
			throw new CustomerException("sourceMobileNo must not be same as targetMobileNo");
		}

	}

	@Override
	public Wallet updateWallet(Wallet wallet) {
		return wDao.save(wallet);
	}

	@Override
	public String updateKYC(String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer customer = opt.get();
			Wallet wallet = customer.getWallet();
			wallet.setKycStatus(true);
			wDao.save(wallet);
			cDao.save(customer);
			return "KYC Done!";
		} else {
			return "KYC failed";
		}
	}

}
