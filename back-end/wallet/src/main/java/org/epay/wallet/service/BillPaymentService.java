package org.epay.wallet.service;

import org.epay.wallet.exception.BillPaymentException;
import org.epay.wallet.exception.WalletException;
import org.epay.wallet.model.BillPayment;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface BillPaymentService {
	// add bill -- pay bill -- add paid bills to database
	public BillPayment addBillPayment(BillPayment bill, String uuid) throws WalletException;

	public List<BillPayment> viewPaidBills(String uid) throws BillPaymentException;

}