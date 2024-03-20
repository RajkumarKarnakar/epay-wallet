package org.epay.wallet.exception;

import java.io.Serial;

public class BeneficiaryException extends Exception {

    @Serial
    private static final long serialVersionUID = 1L;

    public BeneficiaryException() {
    }

    public BeneficiaryException(String message) {
        super(message);
    }
}
