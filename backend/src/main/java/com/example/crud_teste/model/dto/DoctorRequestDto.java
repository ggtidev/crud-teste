package com.example.crud_teste.model.dto;

import com.example.crud_teste.model.enums.StatusEnum;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorRequestDto {

    private String name;
    private String email;
    private String crm;
    private String speciality;
    private StatusEnum status;
    private String contact;
    private String startService;
    private String endService;
    private List<String> daysOfWeek;
}
