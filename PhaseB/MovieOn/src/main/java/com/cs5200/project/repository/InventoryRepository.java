package com.cs5200.project.repository;

import com.cs5200.project.entity.InventoryEntity;
import com.cs5200.project.entity.MovieEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends CrudRepository<InventoryEntity, Integer> {

    InventoryEntity findBySellerIdAndMovieId(int userId, int movieId);
    List<InventoryEntity> findBySellerId(int userId);
    List<InventoryEntity> findByMovieId(int movieId);
}
