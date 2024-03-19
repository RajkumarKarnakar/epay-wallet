package org.epay.model.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class WalletDTO {
	private String walletId;
	private long balance;
	private boolean kycStatus;

}