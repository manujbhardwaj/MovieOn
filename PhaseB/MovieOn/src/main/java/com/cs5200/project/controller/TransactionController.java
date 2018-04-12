package com.cs5200.project.controller;

import com.cs5200.project.entity.FavSellerEntity;
import com.cs5200.project.entity.TransactionEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.service.FavSellerService;
import com.cs5200.project.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;


    @GetMapping("user/{userId}/bought")
    public List<TransactionEntity> getBought(@PathVariable int userId){

        return transactionService.getBought(userId);

    }

    @GetMapping("user/{userId}/sold")
    public List<TransactionEntity> getSold(@PathVariable int userId){

        return transactionService.getSold(userId);

    }

}
