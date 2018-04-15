package com.cs5200.project.controller;

import com.cs5200.project.entity.MovieReviewEntity;
import com.cs5200.project.service.MovieReviewService;
import com.cs5200.project.service.MovieService;
import com.cs5200.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/movieReview")
public class MovieReviewController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private MovieReviewService movieReviewService;

    @Autowired
    private UserService userService;


    @PostMapping("user/{userId}/review")
    public MovieReviewEntity postReview(@PathVariable int userId, @RequestBody MovieReviewEntity movieReview){
        return movieReviewService.postReview(movieReview.getReview(), userService.getUserById(userId), movieService.insertMovie(movieReview.getMovie()));
    }

    @GetMapping("movie/{movieId}/review")
    public List<MovieReviewEntity> getReviewForMovie(@PathVariable int movieId){

        return movieReviewService.getReviewForMovie(movieId);

    }

    @GetMapping("critic/{criticId}")
    public List<MovieReviewEntity> getReviewByCritic(@PathVariable int criticId){

        return movieReviewService.getReviewByCritic(criticId);

    }

}
