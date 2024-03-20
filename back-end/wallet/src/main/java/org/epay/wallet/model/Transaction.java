package org.epay.wallet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Transaction {
    @Id
    private Integer transactionId;
    private Integer bankTransactionId;
    private String transactionType;
    private LocalDateTime transactionDate;
    private Long amount;
    private String description;

    private String recieversWalletId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "walletId")
    private Wallet wallet;
    @Getter
    @Setter
    @jakarta.persistence.Id
    private Long id;

}
