package com.cs5200.project.service;

import com.cs5200.project.entity.FavSellerEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.FavSellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavSellerService {

    @Autowired
    private FavSellerRepository favSellerRepository;

    public FavSellerEntity favSeller(UserEntity buyer, UserEntity seller) {
        return favSellerRepository.save(new FavSellerEntity(buyer, seller));
    }

    public void unfavSeller(int userId, int sellerId) {
        favSellerRepository.deleteByBuyerIdAndSellerId(userId, sellerId);
    }

    public List<FavSellerEntity> getFavSeller(int userId) {
        return favSellerRepository.findByBuyerId(userId);
    }
}
