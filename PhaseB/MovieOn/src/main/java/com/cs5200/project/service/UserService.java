package com.cs5200.project.service;

import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public UserEntity registerUser(UserEntity user) {
        return userRepository.save(user);
    }

    public UserEntity getUserById(int userId) {
        return userRepository.findById(userId);
    }

    public List<UserEntity> findAllSellerCritic() {
        return userRepository.findByType("Seller", "Critic");
    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAllExceptAdmin("admin");
    }

    public UserEntity approveRejectProf(UserEntity seller) {
        return userRepository.save(seller);
    }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }

    public UserEntity updateUser(UserEntity user) {return userRepository.save(user);}
}
