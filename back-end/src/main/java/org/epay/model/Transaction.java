package org.epay.model;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer transactionId;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

}
