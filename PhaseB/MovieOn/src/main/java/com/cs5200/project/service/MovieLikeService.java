package com.cs5200.project.service;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.MovieLikeEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.MovieLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieLikeService {

    @Autowired
    private MovieLikeRepository movieLikeRepository;

    public MovieLikeEntity userLikeMovie(UserEntity user, MovieEntity movie) {
        return movieLikeRepository.save(new MovieLikeEntity(user, movie));
    }

    public void userUnlikeMovie(int userId, int movieId) {
        System.out.println(userId);
        System.out.println(movieId);

        movieLikeRepository.deleteByBuyerIdAndMovieId(userId, movieId);
    }

    public int getLikeCountForMovie(int movieId) {
        return movieLikeRepository.getLikeCountForMovie(movieId);
    }

    public boolean hasUserLikedMovie(int userId, int movieId) {
        return movieLikeRepository.existsByBuyerIdAndMovieId(userId, movieId);
    }
}
