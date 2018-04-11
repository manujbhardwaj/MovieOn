package com.cs5200.project.controller;

import com.cs5200.project.entity.*;
import com.cs5200.project.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movieWishlist")
public class MovieWishlistController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private MovieWishlistService movieWishlistService;

    @Autowired
    private UserService userService;

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

    @GetMapping("user/{userId}/wishlist")
    public List<MovieWishlistEntity> getUserWishlist(@PathVariable int userId){

        return movieWishlistService.getUserWishlist(userId);

    }

}
