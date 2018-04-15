package com.cs5200.project.repository;

import com.cs5200.project.entity.SellerReviewEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SellerReviewRepository extends CrudRepository<SellerReviewEntity, Integer> {

    List<SellerReviewEntity> findAllBySellerId(int sellerId);

    List<SellerReviewEntity> findAllByBuyerId(int buyerId);
}
