package com.cs5200.project.service;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.TransactionEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.AddressRepository;
import com.cs5200.project.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public TransactionEntity buyMovie (MovieEntity movie, UserEntity buyer, UserEntity seller){

        return transactionRepository.save(new TransactionEntity(buyer, seller, movie));

    }

    public List<TransactionEntity> getBought (int userId){

        return transactionRepository.findByBuyerId(userId);

    }

    public List<TransactionEntity> getSold (int userId){

        return transactionRepository.findBySellerId(userId);

    }

}
