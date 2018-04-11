package com.cs5200.project.repository;

import com.cs5200.project.entity.FavSellerEntity;
import com.cs5200.project.entity.InventoryEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface FavSellerRepository extends CrudRepository<FavSellerEntity, Integer> {

    List<FavSellerEntity> findByBuyerId(int userId);

    @Transactional
    void deleteByBuyerIdAndSellerId(int userId, int sellerId);
}
