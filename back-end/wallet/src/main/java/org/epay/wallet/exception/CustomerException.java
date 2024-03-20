package org.epay.wallet.exception;

import java.io.Serial;

public class CustomerException extends RuntimeException {

    @Serial
	private static final long serialVersionUID = -2065290438737274842L;

    public CustomerException() {
        super();
    }

    public CustomerException(String message) {
        super(message);
    }

}
