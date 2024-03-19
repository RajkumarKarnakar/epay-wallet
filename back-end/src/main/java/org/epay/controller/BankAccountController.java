package org.epay.controller;


import org.epay.model.BankAccount;
import org.epay.model.Customer;
import org.epay.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class BankAccountController {

    @Autowired
    private AccountService aServices;

    @PostMapping("/bankaccount/{uniqueId}")
    public ResponseEntity<Customer> addBankAccountHandler(@RequestBody BankAccount Account,
                                                          @PathVariable String uniqueId) {
        Customer customer = aServices.addAccount(Account, uniqueId);

        return new ResponseEntity<Customer>(customer, HttpStatus.ACCEPTED);

    }

    @PatchMapping("/bankaccount/{accountId}/{uniqueId}")
    public ResponseEntity<Customer> ViewAccount(@PathVariable Integer accountId, @PathVariable String uniqueId) {
        Customer customer = aServices.deleteAccount(accountId, uniqueId);

        return new ResponseEntity<Customer>(customer, HttpStatus.ACCEPTED);

    }

    @GetMapping("/bankaccount/{accountNo}/{uniqueId}")
    public ResponseEntity<BankAccount> ViewAccount(@PathVariable String accountNo, @PathVariable String uniqueId) {
        BankAccount bankAccount = aServices.ViewAccount(accountNo, uniqueId);

        return new ResponseEntity<BankAccount>(bankAccount, HttpStatus.ACCEPTED);

    }

    @GetMapping("/bankaccounts/{walletId}/{uniqueId}")
    public ResponseEntity<List<BankAccount>> ViewAllAccount(@PathVariable String walletId,
                                                            @PathVariable String uniqueId) {
        List<BankAccount> bankAccounts = aServices.ViewAllAccount(walletId, uniqueId);

        return new ResponseEntity<List<BankAccount>>(bankAccounts, HttpStatus.ACCEPTED);

    }

    ////////////////

}
