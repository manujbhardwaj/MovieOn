package com.cs5200.project.service;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public AddressEntity addAddress(AddressEntity address) {
        return addressRepository.save(address);
    }
}
