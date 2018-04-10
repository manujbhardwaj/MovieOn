package com.cs5200.project.service;

import com.cs5200.project.entity.InventoryEntity;
import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.model.InventoryFavSeller;
import com.cs5200.project.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public InventoryEntity userSellMovie(UserEntity user,  MovieEntity movie, int copies) {
        return inventoryRepository.save(new InventoryEntity(copies, user, movie));
    }

    public InventoryEntity updateInventory(InventoryEntity inventory) {
        return inventoryRepository.save(inventory);
    }

    public InventoryEntity getMovieCopies(int userId,  int movieId) {
        return inventoryRepository.findBySellerIdAndMovieId(userId, movieId);
    }

    public List<InventoryEntity> getMovieInventory(int userId) {
        return inventoryRepository.findBySellerId(userId);
    }

    public List<InventoryFavSeller> getMovieDetails(int movieId) {
        return inventoryRepository.getMovieDetails(movieId, userId);
    }


}
