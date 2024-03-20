package org.epay.wallet.controller;

import org.epay.wallet.exception.BillPaymentException;
import org.epay.wallet.model.BillPayment;
import org.epay.wallet.service.BillPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PaymentController {

    @Autowired
    private BillPaymentService billPaymentService;

    @PostMapping("/billpayment/{uniqueid}")
    public ResponseEntity<BillPayment> addBillpaymentHandler(@RequestBody BillPayment billPayment,
                                                             @PathVariable("uniqueid") String uniqueid) {
        BillPayment savedBillPayment = billPaymentService.addBillPayment(billPayment, uniqueid);
        return new ResponseEntity<BillPayment>(savedBillPayment, HttpStatus.CREATED);
    }

    @GetMapping("/paidBills/{uniqueid}")
    public ResponseEntity<List<BillPayment>> getBillPaymentByBillIdHandler(@PathVariable String uniqueid)
            throws BillPaymentException {

        List<BillPayment> bills = billPaymentService.viewPaidBills(uniqueid);
        return new ResponseEntity<List<BillPayment>>(bills, HttpStatus.OK);
    }
}
