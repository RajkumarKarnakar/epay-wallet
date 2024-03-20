package org.epay.wallet.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Customer {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    @NotBlank
    @NotEmpty
    @NotNull
    @Size(min = 3, max = 20, message = "Customer name should be min 3 and max 20 character length")
    private String firstName;
    @NotBlank
    @NotEmpty
    @NotNull
    @Size(min = 3, max = 20, message = "Customer name should be min 3 and max 20 character length")
    private String lastName;
    @NotBlank
    @NotEmpty
    @NotNull
    @Size(min = 10, max = 10, message = "mobileNumber Should be 10 digit length")
    private String mobileNumber;
    @NotBlank
    @NotEmpty
    @NotNull
    @Size(min = 8, max = 15, message = "Password should be min 8 and max 15 character length")
    private String password;

    private LocalDate dob;
    @NotBlank
    @NotEmpty
    @NotNull
    private String gender;

    @OneToOne(cascade = CascadeType.ALL)
    private Wallet wallet;
    @Getter
    @Setter
    @jakarta.persistence.Id
    private Long id;

}

