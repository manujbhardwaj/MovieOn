package com.cs5200.project.controller;

import com.cs5200.project.entity.InventoryEntity;
import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.MovieWishlistEntity;
import com.cs5200.project.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("{movieId}/user/{userId}/unlike")
    public int unlikeMovie(@PathVariable int movieId, @PathVariable int userId){

        movieLikeService.userUnlikeMovie(userId, movieId);

        return movieLikeService.getLikeCountForMovie(movieId);

    }

    @GetMapping("{movieId}/user/{userId}/liked")
    public boolean hasUserLikedMovie(@PathVariable int userId, @PathVariable int movieId){

        return movieLikeService.hasUserLikedMovie(userId, movieId);

    }




    @PostMapping("user/{userId}/wishlist")
    public MovieWishlistEntity wishlistMovie(@PathVariable int userId, @RequestBody MovieEntity movie){

        movieService.insertMovie(movie);

        return movieWishlistService.userWishlistMovie(userService.getUserById(userId), movie);
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
}
