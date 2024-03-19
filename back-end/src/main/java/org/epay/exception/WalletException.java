package org.epay.exception;

public class WalletException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public WalletException() {
		super();
	}

	public WalletException(String message) {
		super(message);
	}

}
