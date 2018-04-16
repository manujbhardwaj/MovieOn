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
    public List<UserEntity> findAllSellerCritic(){
        return userService.findAllSellerCritic();

    }

    @GetMapping("user")
    public List<UserEntity> getAllUsers(){
        return userService.getAllUsers();

    }

    @GetMapping("note")
    public List<AdminNoteEntity> getAllNote(){
        return adminNoteService.getAllNote();

    }

    @DeleteMapping("user/{userId}")
    public List<UserEntity> deleteUser(@PathVariable int userId){
        userService.deleteUser(userId);

        return userService.getAllUsers();

    }

    @DeleteMapping("note/{noteId}")
    public List<AdminNoteEntity> deleteNote(@PathVariable int noteId){
        adminNoteService.deleteNote(noteId);

        return adminNoteService.getAllNote();

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
