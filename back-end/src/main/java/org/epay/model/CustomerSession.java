package org.epay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;


@Entity
@Data
@Getter
@Setter
@ToString
public class CustomerSession {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

//	@OneToOne
//	@JoinColumn(name = "customer_id")
//	private Customer customer;

	@Column(unique = true)
	private int CustomerId;

	@Column(unique = true)
	private String uniqueId;

	private LocalDateTime timeStamp;

}
