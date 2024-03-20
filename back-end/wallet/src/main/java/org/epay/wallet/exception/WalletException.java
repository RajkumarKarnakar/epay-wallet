package org.epay.wallet.exception;

import java.io.Serial;

public class WalletException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;

    public WalletException() {
        super();
    }

    public WalletException(String message) {
        super(message);
    }

}
