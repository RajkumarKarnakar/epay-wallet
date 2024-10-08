package org.epay.wallet.controller;

import org.epay.wallet.model.Transaction;
import org.epay.wallet.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionService tService;

    @GetMapping("/viewAllTransaction/{uniqueId}")
    public ResponseEntity<List<Transaction>> viewAllTransaction(@PathVariable String uniqueId) {
        return new ResponseEntity<List<Transaction>>(tService.viewAllTransaction(uniqueId), HttpStatus.ACCEPTED);
    }

    @GetMapping("/viewAllTransactionType/{type}/{uniqueId}")
    public ResponseEntity<List<Transaction>> viewAllTransaction(@PathVariable String type,
                                                                @PathVariable String uniqueId) {
        return new ResponseEntity<List<Transaction>>(tService.viewAllTransactionByType(type, uniqueId),
                HttpStatus.ACCEPTED);
    }


}
