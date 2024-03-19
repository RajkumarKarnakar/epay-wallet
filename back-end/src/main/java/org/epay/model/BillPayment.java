package org.epay.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class BillPayment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer billId;
	private String billType;
	private Long amount;
	private LocalDate paymentDate;
	private String billDescription;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Wallet wallet;

	// {"billType":"payment","amount":"500","paymentDate":"2018-03-29","billDescription":"Electricity
	// bill payment"
	// }

}
