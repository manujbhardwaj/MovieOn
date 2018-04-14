package com.cs5200.project.controller;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.service.AddressService;
import com.cs5200.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/address")
public class AddressController {

    @Autowired
    private UserService userService;

    @Autowired
    private AddressService addressService;

    @PostMapping("user/{userId}/add")
    public AddressEntity addAddress (@PathVariable int userId, @RequestBody AddressEntity address){
        address.setUser(userService.getUserById(userId));
        return addressService.addAddress(address);
    }

    @GetMapping("user/{userId}")
    public List<AddressEntity> getUserAddress (@PathVariable int userId){
        return addressService.getUserAddress(userId);
    }

    @GetMapping("{addressId}")
    public AddressEntity getAddressById (@PathVariable int addressId){
        return addressService.getAddressById(addressId);
    }

    @PostMapping("/update")
    public AddressEntity updateAddress (@RequestBody AddressEntity address){
        return addressService.updateAddress(address);
    }
}
