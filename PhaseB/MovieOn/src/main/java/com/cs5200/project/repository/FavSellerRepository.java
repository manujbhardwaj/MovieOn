package com.cs5200.project.repository;

import com.cs5200.project.entity.FavSellerEntity;
import com.cs5200.project.entity.InventoryEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavSellerRepository extends CrudRepository<FavSellerEntity, Integer> {

}
