package com.example.crud_teste.service;

import com.example.crud_teste.exception.NotFoundException;
import com.example.crud_teste.model.dto.DoctorRequestDto;
import com.example.crud_teste.model.dto.DoctorResponseDto;
import com.example.crud_teste.model.entity.Doctor;
import com.example.crud_teste.repository.DoctorRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    private static final Logger log = LoggerFactory.getLogger(DoctorService.class);
    private final DoctorRepository repository;

    private final ModelMapper modelMapper;

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Autowired
    public DoctorService(DoctorRepository repository) {
        this.repository = repository;
        this.modelMapper = modelMapper();
    }

    public DoctorResponseDto getDoctor(String name){

        Doctor doctor = repository.findByName(name).orElseThrow( () -> new NotFoundException("Doctor not found"));
        log.info("Get doctor by name: {}", name);
        return modelMapper.map(doctor, DoctorResponseDto.class);
    }

    public List<DoctorResponseDto> getAllDoctors(){

        List<Doctor> list = repository.findAll();
        return list.stream().map(
                doctor -> modelMapper.map(doctor, DoctorResponseDto.class)
        ).collect(Collectors.toList());
    }

    public DoctorResponseDto getDoctorById(Long id){

      Doctor doctor = repository.findById(id).orElseThrow(() -> new NotFoundException("Doctor not found"));
      log.info("Get doctor by id: {}", id);
      return  modelMapper.map(doctor, DoctorResponseDto.class);
    }

    public Doctor getByCrm(String crm){

       log.info("Get doctor by crm: {}", crm);
       return repository.findByCrm(crm).orElseThrow(() -> new NotFoundException("Doctor not found"));
    }

    public DoctorResponseDto createDoctor(DoctorRequestDto doctorRequestDto){

       log.info("Creating doctor: {}", doctorRequestDto.getName());

       _doctorValidation(doctorRequestDto);

       Doctor doctor = repository.save(_buildDoctor(doctorRequestDto));

       DoctorResponseDto doctorResponseDto = buildResponse(doctor);

       log.info("Doctor {} has created: ", doctorResponseDto.getName());
       return doctorResponseDto;
    }

    public DoctorResponseDto updateDoctor(Doctor doctor){
       if(repository.findById(doctor.getId()).isPresent()){
           Optional<Doctor> findDoctor = repository.findByEmail(doctor.getEmail());

           if(findDoctor.isPresent() && !Objects.equals(findDoctor.get().getId(), doctor.getId())){
               log.info("Doctor already exists");
               throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Doctor already exists", null);
            }

           Doctor doctorUpdated = repository.save(doctor);

           return buildResponse(doctorUpdated);
        }
       log.info("Doctor not found");
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found", null);
    }

    private void _doctorValidation(DoctorRequestDto doctorRequestDto){
       if (repository.findByCrm(doctorRequestDto.getCrm()).isPresent()){
           throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Doctor already exists with this CRM", null);
       }

       if (repository.findByEmail(doctorRequestDto.getEmail()).isPresent()){
           throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Doctor Already exists with this CRM", null);
       }
    }

    private Doctor _buildDoctor(DoctorRequestDto doctorRequestDto){
       return Doctor.builder()
               .name(doctorRequestDto.getName())
               .email(doctorRequestDto.getEmail())
               .crm(doctorRequestDto.getCrm())
               .speciality(doctorRequestDto.getSpeciality())
               .contact(doctorRequestDto.getContact())
               .status(doctorRequestDto.getStatus())
               .startService(doctorRequestDto.getStartService())
               .endService(doctorRequestDto.getEndService())
               .daysOfWeek(doctorRequestDto.getDaysOfWeek()).build();
    }

    private DoctorResponseDto buildResponse(Doctor doctor){
       return DoctorResponseDto.builder()
               .name(doctor.getName())
               .email(doctor.getEmail())
               .crm(doctor.getCrm())
               .speciality(doctor.getSpeciality())
               .contact(doctor.getContact())
               .status(doctor.getStatus())
               .startService(doctor.getStartService())
               .endService(doctor.getEndService())
               .daysOfWeek(doctor.getDaysOfWeek()).build();
    }

    public void deleteDoctor(Long id) {
        repository.deleteById(id);
    }
}
