package com.cs5200.project.controller;

import com.cs5200.project.entity.FavSellerEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.service.FavSellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/favSeller")
public class FavSellerController {

    @Autowired
    private FavSellerService favSellerService;


    @GetMapping("user/{userId}/fav")
    public List<FavSellerEntity> getFavSeller(@PathVariable int userId){

        return favSellerService.getFavSeller(userId);

    }

    @DeleteMapping("user/{userId}/seller/{sellerId}/unfav")
    public ResponseEntity unfavSeller(@PathVariable int userId, @PathVariable int sellerId){

        favSellerService.unfavSeller(userId, sellerId);

        return new ResponseEntity<>("{}", HttpStatus.OK);

    }

    @PostMapping("user/{userId}/seller/fav")
    public FavSellerEntity favSeller(@PathVariable int userId, @RequestBody UserEntity seller){

        return favSellerService.favSeller(userId, seller);
    }

}
