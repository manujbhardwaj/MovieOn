package com.cs5200.project.service;

import com.cs5200.project.entity.FavSellerEntity;
import com.cs5200.project.entity.InventoryEntity;
import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.FavSellerRepository;
import com.cs5200.project.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavSellerService {

    @Autowired
    private FavSellerRepository favSellerRepository;

    public FavSellerEntity favSeller(int userId, UserEntity seller) {
        return favSellerRepository.save(new FavSellerEntity(userId, seller));
    }
}
