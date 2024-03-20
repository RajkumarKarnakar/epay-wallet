package org.epay.wallet.controller;

import org.epay.wallet.model.Wallet;
import org.epay.wallet.service.AccountService;
import org.epay.wallet.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class WalletController {

    //@Qualifier("accountService")
    @Autowired
    @SuppressWarnings(value = {"unused"})
    private AccountService accountServices;
    @Autowired
    private WalletService walletService;

    @PutMapping("Kyc/{uniqueId}")
    public ResponseEntity<String> updateKYCStatus(@PathVariable String uniqueId) {
        String msg = walletService.updateKYC(uniqueId);
        return new ResponseEntity<String>(msg, HttpStatus.OK);
    }

    @GetMapping("/balance/{uniqueId}")
    public ResponseEntity<String> showBalance(@PathVariable String uniqueId) {
        String balance = walletService.showBalance(uniqueId);
        return new ResponseEntity<String>(balance, HttpStatus.OK);
    }

    @PostMapping("/addMoney/{BankId}/{amount}/{uniqueId}")
    public ResponseEntity<Wallet> addMoneytoWallet(@PathVariable String BankId, @PathVariable Long amount,
                                                   @PathVariable String uniqueId) {
        Wallet wallet = walletService.addMoneytoWallet(BankId, amount, uniqueId);
        return new ResponseEntity<Wallet>(wallet, HttpStatus.OK);
    }

    @PostMapping("/bankTrf/{BankId}/{amount}/{uniqueId}")
    public ResponseEntity<Wallet> transferToBank(@PathVariable String BankId, @PathVariable Long amount,
                                                 @PathVariable String uniqueId) {
        Wallet wallet = walletService.transferToBank(BankId, amount, uniqueId);
        return new ResponseEntity<Wallet>(wallet, HttpStatus.OK);
    }

    @PostMapping("/sendMoney/{sourceMobileNo}/{targetMobileNo}/{amount}/{uniqueId}")
    public ResponseEntity<Wallet> transferToBank(@PathVariable String sourceMobileNo,
                                                 @PathVariable String targetMobileNo, @PathVariable Long amount, @PathVariable String uniqueId) {
        Wallet wallet = walletService.fundTransfer(sourceMobileNo, targetMobileNo, amount, uniqueId);
        return new ResponseEntity<Wallet>(wallet, HttpStatus.OK);
    }

}
