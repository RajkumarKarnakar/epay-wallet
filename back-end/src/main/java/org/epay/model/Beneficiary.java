package org.epay.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Entity
@Data
@Getter
@Setter
@ToString
public class Beneficiary {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer bid;
	private String name;
	private String mobileNo;
	private String relation;

	@JsonIgnore
	@ManyToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name = "cusomerId")
	private Customer customer;

	public void setCustomer(Customer existingCustomer) {
		this.customer = existingCustomer;
	}

	// {"name":"rajan","mobileNo":"9999999999","relationWithCustomer":"Father"}

}