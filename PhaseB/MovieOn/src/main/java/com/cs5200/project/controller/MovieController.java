package com.cs5200.project.controller;

import com.cs5200.project.entity.*;
import com.cs5200.project.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private UserService userService;

    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private FavSellerService favSellerService;

    @PostMapping("user/{userId}/sell/copies/{copies}")
    public InventoryEntity sellMovie(@PathVariable int userId, @PathVariable int copies, @RequestBody MovieEntity movie){
        System.out.println(movie);

        movieService.insertMovie(movie);

        return inventoryService.userSellMovie(userService.getUserById(userId), movie, copies);

    }

    @PutMapping("inventory")
    public InventoryEntity updateInventory(@RequestBody InventoryEntity inventory){

        return inventoryService.updateInventory(inventory);

    }

    @GetMapping("{movieId}/user/{userId}/copies")
    public InventoryEntity getMovieCopies(@PathVariable int movieId, @PathVariable int userId){
        InventoryEntity inventoryEntity = inventoryService.getMovieCopies(userId, movieId);

        return inventoryEntity;

    }

    @PostMapping("user/{userId}/seller/fav")
    public FavSellerEntity favSeller(@PathVariable int userId, @RequestBody UserEntity seller){

        return favSellerService.favSeller(userId, seller);
    }

    @GetMapping("{movieId}/inventory")
    public List<InventoryEntity> getMovieDetails(@PathVariable int movieId){

        return inventoryService.getMovieDetails(movieId);

    }

    @GetMapping("user/{userId}/fav")
    public List<FavSellerEntity> getFavSeller(@PathVariable int userId){

        return favSellerService.getFavSeller(userId);

    }

    @DeleteMapping("user/{userId}/seller/{sellerId}/unfav")
    public ResponseEntity unfavSeller(@PathVariable int userId, @PathVariable int sellerId){

        favSellerService.unfavSeller(userId, sellerId);

        return new ResponseEntity<>("{}", HttpStatus.OK);

    }

    @GetMapping("user/{userId}/inventory")
    public List<InventoryEntity> getMovieInventory(@PathVariable int userId){

        return inventoryService.getMovieInventory(userId);

    }
}
