package com.example.crud_teste.repository;

import com.example.crud_teste.model.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    Optional<Doctor> findByName(String name);

    Optional<Doctor> findByCrm(String crm);

    Optional<Doctor> findByEmail(String email);
}
