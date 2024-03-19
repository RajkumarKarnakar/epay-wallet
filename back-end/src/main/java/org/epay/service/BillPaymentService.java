package org.epay.service;

import org.epay.exception.BillPaymentException;
import org.epay.exception.WalletException;
import org.epay.model.BillPayment;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface BillPaymentService {
	// add bill -- pay bill -- add paid bills to database
	public BillPayment addBillPayment(BillPayment bill, String uuid) throws WalletException;

	public List<BillPayment> viewPaidBills(String uid) throws BillPaymentException;

}