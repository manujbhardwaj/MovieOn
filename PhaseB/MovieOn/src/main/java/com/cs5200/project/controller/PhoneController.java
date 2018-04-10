package com.cs5200.project.controller;

import com.cs5200.project.entity.PhoneEntity;
import com.cs5200.project.service.PhoneService;
import com.cs5200.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/phone")
public class PhoneController {

    @Autowired
    private UserService userService;

    @Autowired
    private PhoneService phoneService;

    @PostMapping("user/{userId}/add")
    public PhoneEntity addAddress (@PathVariable int userId, @RequestBody PhoneEntity phone){
        phone.setUser(userService.getUserById(userId));
        return phoneService.addPhone(phone);
    }
}
