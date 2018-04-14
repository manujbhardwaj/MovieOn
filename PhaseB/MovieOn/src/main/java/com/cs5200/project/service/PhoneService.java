package com.cs5200.project.service;

import com.cs5200.project.entity.PhoneEntity;
import com.cs5200.project.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhoneService {

    @Autowired
    private PhoneRepository phoneRepository;

    public PhoneEntity addPhone(PhoneEntity phone) {
        return phoneRepository.save(phone);
    }

    public List<PhoneEntity> getUserPhone(int userId) {
        return phoneRepository.findByUserId(userId);
    }

    public PhoneEntity getPhoneById(int phoneId) {
        return phoneRepository.findById(phoneId);
    }

    public PhoneEntity updatePhone (PhoneEntity phone) {return phoneRepository.save(phone);}
}
