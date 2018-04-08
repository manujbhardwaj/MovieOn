package com.cs5200.project.controller;

import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.service.UserService;
import org.mindrot.jbcrypt.BCrypt;
import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("login")
    public UserEntity loginUser(@RequestBody UserEntity user, HttpSession session) throws Exception {
        UserEntity u = userService.findUserByUsername(user.getUsername());

        if(u != null && BCrypt.checkpw(user.getPasswrd(), u.getPasswrd())){

            if(u.getType().equals("buyer") && !u.isApproved()){

                throw new Exception("Admin approval is pending.");

            }

            session.setAttribute("user_session", u);
            session.setMaxInactiveInterval(600);
            return u;

        }
        else{

            throw new Exception("Invalid Username and passwrd");

        }
    }

}
