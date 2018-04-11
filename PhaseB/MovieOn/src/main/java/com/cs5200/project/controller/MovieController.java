package com.cs5200.project.controller;

import com.cs5200.project.entity.*;
import com.cs5200.project.service.*;
import org.springframework.beans.factory.annotation.Autowired;
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
    private TransactionService transactionService;

    @PostMapping("user/{userId}/sell/copies/{copies}")
    public InventoryEntity sellMovie(@PathVariable int userId, @PathVariable int copies, @RequestBody MovieEntity movie){
        System.out.println(movie);

        movieService.insertMovie(movie);

        return inventoryService.userSellMovie(userService.getUserById(userId), movie, copies);

    }

    @PutMapping("inventory")
    public InventoryEntity updateInventoryForMovie(@RequestBody InventoryEntity inventory){

        return inventoryService.updateInventoryForMovie(inventory);

    }

    @PutMapping("{movieId}/buyer/{buyerId}/seller/{sellerId}/buy")
    public TransactionEntity buyMovie(@PathVariable int movieId, @PathVariable int buyerId, @PathVariable int sellerId){

        inventoryService.updateCopies(movieId, sellerId);

        return transactionService.buyMovie(movieService.getMovieById(movieId),userService.getUserById(buyerId), userService.getUserById(sellerId));

    }

    @GetMapping("{movieId}/user/{userId}/copies")
    public InventoryEntity getMovieCopies(@PathVariable int movieId, @PathVariable int userId){
        InventoryEntity inventoryEntity = inventoryService.getMovieCopies(userId, movieId);

        return inventoryEntity;

    }


    @GetMapping("{movieId}/inventory")
    public List<InventoryEntity> getAllSellerForMovie (@PathVariable int movieId){

        return inventoryService.getAllSellerForMovie (movieId);

    }


    @GetMapping("user/{userId}/inventory")
    public List<InventoryEntity> getMovieInventory(@PathVariable int userId){

        return inventoryService.getMovieInventory(userId);

    }
}
