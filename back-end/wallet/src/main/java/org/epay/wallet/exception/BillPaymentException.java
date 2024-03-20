package org.epay.wallet.exception;

import java.io.Serial;

public class BillPaymentException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 446516947896599468L;

    public BillPaymentException() {
    }

    public BillPaymentException(String message) {
        super(message);
    }

}
