package com.cs5200.project.service;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.MovieReviewEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.MovieReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieReviewService {

    @Autowired
    private MovieReviewRepository movieReviewRepository;

    public MovieReviewEntity postReview(String review, UserEntity user, MovieEntity movie) {
        return movieReviewRepository.save(new MovieReviewEntity(review, user, movie));
    }

    public List<MovieReviewEntity> getReviewForMovie(int movieId) {
        return movieReviewRepository.findAllByMovieId(movieId);
    }

    public List<MovieReviewEntity> getReviewByCritic(int criticId) {
        return movieReviewRepository.findByCriticId(criticId);
    }

}
