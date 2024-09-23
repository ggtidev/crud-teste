package com.example.crud_teste.controller;

import com.example.crud_teste.model.dto.DoctorRequestDto;
import com.example.crud_teste.model.dto.DoctorResponseDto;
import com.example.crud_teste.model.entity.Doctor;
import com.example.crud_teste.service.DoctorService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/doctor")
public class DoctorController {

    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping
    public ResponseEntity<DoctorResponseDto> getDoctor(@RequestParam String name){

        log.info("Get doctor by name: {}", name);
        return new ResponseEntity<>(doctorService.getDoctor(name), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<DoctorResponseDto>> getAll(){

        return new ResponseEntity<>(doctorService.getAllDoctors(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<DoctorResponseDto> createDoctor(@Valid @RequestBody DoctorRequestDto doctorRequestDto){

        return new ResponseEntity<>(doctorService.createDoctor(doctorRequestDto), HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<DoctorResponseDto> updateDoctor(@Valid @RequestBody Doctor doctor){

        log.info("Update doctor: {}", doctor.getName());
        return new ResponseEntity<>(doctorService.updateDoctor(doctor), HttpStatus.OK);
    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id){

        log.info("Delete doctor id: ", id);
        doctorService.deleteDoctor(id);
    }

  @GetMapping("/{id}")
  public ResponseEntity<DoctorResponseDto> getDoctorById(@PathVariable long id){

    log.info("Get doctor by name: {}", id);
    return new ResponseEntity<>(doctorService.getDoctorById(id), HttpStatus.OK);
  }
}
