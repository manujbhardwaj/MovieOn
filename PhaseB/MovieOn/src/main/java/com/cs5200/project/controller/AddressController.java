package com.cs5200.project.controller;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.service.AddressService;
import com.cs5200.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
