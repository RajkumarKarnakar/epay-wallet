package org.epay.wallet.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
    @Getter
    @jakarta.persistence.Id
    @Id
    private Integer id;


    @Column(unique = true)
    private int CustomerId;

    @Column(unique = true)
    private String uniqueId;

    private LocalDateTime timeStamp;

    public void setId(Long id) {
        this.id = Math.toIntExact(id);
    }

}
