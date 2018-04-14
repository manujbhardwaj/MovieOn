package com.cs5200.project.service;

import com.cs5200.project.entity.SellerReviewEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.SellerReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellerReviewService {

    @Autowired
    private SellerReviewRepository sellerReviewRepository;

    public SellerReviewEntity postSellerReview ( UserEntity user, UserEntity seller, String review) {
        return sellerReviewRepository.save(new SellerReviewEntity(review, user, seller));
    }

    public List<SellerReviewEntity> getSellerReview (int sellerId) {
        return sellerReviewRepository.findAllBySellerId(sellerId);
    }

}
