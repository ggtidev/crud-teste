package com.example.crud_teste.model.entity;

import com.example.crud_teste.model.entity.DateAudit.DateAudit;
import com.example.crud_teste.model.enums.StatusEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "PERSON", uniqueConstraints = {@UniqueConstraint(columnNames = {"CRM", "EMAIL"})})
public class Doctor extends DateAudit {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "NAME", nullable = false)
    @Size(min = 5, max = 50)
    private String name;

    @NotNull
    @Email
    @Column(name = "EMAIL", unique = true)
    @Size(min = 10, max = 30)
    private String email;

    @NotNull
    @Column(name = "CRM", unique = true)
    private String crm;

    @NotNull
    @Column(name = "SPECIALITY")
    @Size(min = 5, max = 50)
    private String speciality;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "STATUS", length =  20)
    private StatusEnum status;

    @NotNull
    @Column(name = "CONTACT")
    @Size(min = 5, max=20)
    private String contact;

    @Column(name = "STARTSERVICE")
    private String startService;

    @Column(name = "ENDSERVICE")
    private String endService;

    @Column(name = "DAYSOFWEEK")
    private List<String> daysOfWeek;
}
