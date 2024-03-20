package org.epay.wallet.service;

import org.epay.wallet.exception.CustomerException;
import org.epay.wallet.model.Customer;
import org.epay.wallet.model.CustomerSession;
import org.epay.wallet.model.Transaction;
import org.epay.wallet.model.Wallet;
import org.epay.wallet.repository.CustomerDao;
import org.epay.wallet.repository.CustomerSessionDao;
import org.epay.wallet.repository.TransactionDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionDao tDao;

	@Autowired
	@SuppressWarnings(value = { "unused" })
	private WalletService walletService;

	@Autowired
	private CustomerSessionDao csDao;

	@Autowired
	private CustomerDao cDao;

	@Override
	public Transaction addTransaction12(Transaction trans, String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer customer = opt.get();
			Wallet wallet = customer.getWallet();

			// associate
			trans.setWallet(wallet);
			return tDao.save(trans);

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

	@Override
	public List<Transaction> viewAllTransaction(String uniqueId) {

		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getCustomerId());
			Customer customer = opt.get();
			Wallet wallet = customer.getWallet();

			List<Transaction> transactios = tDao.findByWallet(wallet);
			if (transactios.size() == 0) {
				throw new CustomerException("no transactio found");
			} else {
				return transactios;
			}

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

//
//    @Override
//    public List<Transaction> viewTransactionByDate(LocalDateTime from, LocalDateTime to) {
//        List<Transaction> transList = transactionRepository.findByTransactionDateBetween(from, to);
//        if(transList.isEmpty()) {
//            throw new TransactionException("No transactions found for the specified date range");
//        }
//        return transList;
//    }
//
	@Override
	public List<Transaction> viewAllTransactionByType(String type, String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {

			List<Transaction> transactios = tDao.findByTransactionType(type);
			if (transactios.size() == 0) {
				throw new CustomerException("no transactio found with this type!");
			} else {
				return transactios;
			}

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

}
