package com.cs5200.project.controller;

import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.service.UserService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("login")
    public UserEntity loginUser(@RequestBody UserEntity user, HttpSession session) throws Exception {
        UserEntity u = userService.findUserByUsername(user.getUsername());

        if(u != null && BCrypt.checkpw(user.getPasswrd(), u.getPasswrd())){

            if(u.getType().equals("buyer") && !u.isApproved())
                throw new Exception("Admin approval is pending.");

            session.setAttribute("user_session", u);
            session.setMaxInactiveInterval(600);
            return u;

        }
        else
            throw new Exception("Invalid Username and passwrd");

    }

    @GetMapping("loggedIn")
    public UserEntity loggedIn(HttpSession session){

        UserEntity u = (UserEntity) session.getAttribute("user_session");
        return u == null ? new UserEntity() : u;

    }

    @PostMapping("logout")
    public ResponseEntity logout(HttpSession session){

        session.invalidate();
        return new ResponseEntity<>("{}", HttpStatus.OK);

    }

    @PostMapping("register")
    public UserEntity registerUser(@RequestBody UserEntity user, HttpSession session) throws Exception {

        if(userService.findUserByUsername(user.getUsername()) != null)
            throw new Exception("Username already registered");

        user.setPasswrd(BCrypt.hashpw(user.getPasswrd(), BCrypt.gensalt()));
        UserEntity u = userService.registerUser(user);

        if(user.getType().equals("Seller") || user.getType().equals("Critic"))
            throw new Exception("User registered successfully. Admin approval is pending.");

        session.setAttribute("user_session", u);
        session.setMaxInactiveInterval(600);
        return u;
    }

    @PostMapping("update")
    public UserEntity updateUser(@RequestBody UserEntity user, HttpSession session) {

        user.setPasswrd(BCrypt.hashpw(user.getPasswrd(), BCrypt.gensalt()));
        session.setAttribute("user_session", user);
        session.setMaxInactiveInterval(600);
        return userService.updateUser(user);
    }
}
