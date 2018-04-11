package com.cs5200.project.controller;

import com.cs5200.project.entity.*;
import com.cs5200.project.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movieLike")
public class MovieLikeController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private MovieLikeService movieLikeService;

    @Autowired
    private UserService userService;


    @PostMapping("user/{userId}/like")
    public int likeMovie(@PathVariable int userId, @RequestBody MovieEntity movie){

        movieService.insertMovie(movie);

        movieLikeService.userLikeMovie(userService.getUserById(userId), movie);

        return movieLikeService.getLikeCountForMovie(movie.getId());

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


    @GetMapping("user/{userId}/like")
    public List<MovieLikeEntity> getUserLike(@PathVariable int userId){

        return movieLikeService.getUserLike(userId);

    }
}
