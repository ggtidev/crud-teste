package com.example.crud_teste.model.entity.DateAudit;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

@Data
@MappedSuperclass
public class DateAudit {

    @CreationTimestamp
    @Column(name = "CREATED_AT", nullable = false, updatable = false)
    private Instant createAt;

    @UpdateTimestamp
    @Column(name = "UPDATED_AT", nullable = false)
    private Instant updatedAt;
}
