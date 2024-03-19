package org.epay.exception;

public class CustomerException extends RuntimeException {

	private static final long serialVersionUID = -2065290438737274842L;

	public CustomerException() {
		super();
	}

	public CustomerException(String message) {
		super(message);
	}

}
