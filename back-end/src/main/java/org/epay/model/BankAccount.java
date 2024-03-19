package org.epay.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class BankAccount {
	@Getter
	@Setter
	@jakarta.persistence.Id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String accountNo;
	private String ifscCode;
	private String bankName;
	private Long balance;

	@JsonIgnore
	@ManyToOne
	private Wallet wallet;

}
