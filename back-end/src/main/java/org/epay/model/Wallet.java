package org.epay.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Wallet {
	@Id
	private String walletId;
	private boolean kycStatus = false;
	private Long balance;
	@OneToMany(mappedBy = "wallet", cascade = CascadeType.ALL)
	List<BankAccount> banks = new ArrayList<>();

}
