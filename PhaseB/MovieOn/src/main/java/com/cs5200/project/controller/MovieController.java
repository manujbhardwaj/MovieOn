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
    private MovieLikeService movieLikeService;

    @Autowired
    private MovieWishlistService movieWishlistService;

    @Autowired
    private UserService userService;

    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private FavSellerService favSellerService;

    @PostMapping("user/{userId}/like")
    public int likeMovie(@PathVariable int userId, @RequestBody MovieEntity movie){

        movieService.insertMovie(movie);

        movieLikeService.userLikeMovie(userService.getUserById(userId), movie);

        return movieLikeService.getLikeCountForMovie(movie.getId());

    }

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

    @PutMapping("{movieId}/user/{userId}/unlike")
    public int unlikeMovie(@PathVariable int movieId, @PathVariable int userId){

        movieLikeService.userUnlikeMovie(userId, movieId);

        return movieLikeService.getLikeCountForMovie(movieId);

    }

    @GetMapping("{movieId}/user/{userId}/liked")
    public boolean hasUserLikedMovie(@PathVariable int userId, @PathVariable int movieId){

        return movieLikeService.hasUserLikedMovie(userId, movieId);

    }

    @GetMapping("{movieId}/user/{userId}/copies")
    public InventoryEntity getMovieCopies(@PathVariable int movieId, @PathVariable int userId){
        InventoryEntity inventoryEntity = inventoryService.getMovieCopies(userId, movieId);

        return inventoryEntity;

    }




    @PostMapping("user/{userId}/wishlist")
    public MovieWishlistEntity wishlistMovie(@PathVariable int userId, @RequestBody MovieEntity movie){

        movieService.insertMovie(movie);

        return movieWishlistService.userWishlistMovie(userService.getUserById(userId), movie);
    }

    @PostMapping("user/{userId}/seller/fav")
    public FavSellerEntity favSeller(@PathVariable int userId, @RequestBody UserEntity seller){

        return favSellerService.favSeller(userId, seller);
    }

    @PutMapping("{movieId}/user/{userId}/unwishlist")
    public ResponseEntity<String> unwishlistMovie(@PathVariable int movieId, @PathVariable int userId){

        movieWishlistService.userUnwishlistMovie(userId, movieId);

        return new ResponseEntity<>("{}", HttpStatus.OK);
    }

    @GetMapping("{movieId}/user/{userId}/wishlist")
    public boolean hasUserWishlistMovie(@PathVariable int userId, @PathVariable int movieId){

        return movieWishlistService.hasUserWishlistMovie(userId, movieId);

    }

//    @GetMapping("{movieId}/inventory")
//    public List<InventoryEntity> getMovieDetails(@PathVariable int movieId){
//
//        return inventoryService.getMovieDetails(movieId);
//
//    }

    @GetMapping("user/{userId}/fav")
    public List<FavSellerEntity> getFavSeller(@PathVariable int userId){

        return favSellerService.getFavSeller(userId);

    }

    @GetMapping("user/{userId}/inventory")
    public List<InventoryEntity> getMovieInventory(@PathVariable int userId){

        return inventoryService.getMovieInventory(userId);

    }
}
