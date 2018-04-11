package com.cs5200.project.controller;

import com.cs5200.project.entity.AdminNoteEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.service.AdminNoteService;
import com.cs5200.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private AdminNoteService adminNoteService;

    @GetMapping("seller")
    public List<UserEntity> findAllSeller(){
        return userService.findAllSeller();

    }

    @GetMapping("user")
    public List<UserEntity> getAllUsers(){
        return userService.getAllUsers();

    }

    @PutMapping("approve/seller")
    public UserEntity approveRejectProf(@RequestBody UserEntity seller) {

        return userService.approveRejectProf(seller);

    }

    @PostMapping("user/{userId}/contact")
    public AdminNoteEntity contactAdmin(@PathVariable int userId, @RequestBody AdminNoteEntity note) {

        if(userId == 0){
            return adminNoteService.contactAdmin(note);
        }else{
            note.setUser(userService.getUserById(userId));
            return adminNoteService.contactAdmin(note);
        }
    }
}
