package org.epay.exception;

public class BillPaymentException extends RuntimeException {

	private static final long serialVersionUID = 446516947896599468L;

	public BillPaymentException() {
	}

	public BillPaymentException(String message) {
		super(message);
	}

}
