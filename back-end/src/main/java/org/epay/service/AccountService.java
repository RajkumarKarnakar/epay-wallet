package org.epay.service;

import org.epay.model.BankAccount;
import org.epay.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;




@Service
public interface AccountService {
	public Customer addAccount(BankAccount Account, String uniqueId);

	public Customer deleteAccount(Integer accountId, String uniqueId);

	public BankAccount ViewAccount(String accountNo, String uniqueId);

	public List<BankAccount> ViewAllAccount(String walletId, String uniqueId);

	// showBalance: Prashant Anand
	public String showBalance(String mobileNo);
}
