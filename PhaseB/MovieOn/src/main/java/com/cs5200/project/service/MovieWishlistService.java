package com.cs5200.project.service;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.MovieLikeEntity;
import com.cs5200.project.entity.MovieWishlistEntity;
import com.cs5200.project.entity.UserEntity;
import com.cs5200.project.repository.MovieLikeRepository;
import com.cs5200.project.repository.MovieWishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieWishlistService {

    @Autowired
    private MovieWishlistRepository movieWishlistRepository;

    public MovieWishlistEntity userWishlistMovie(UserEntity user, MovieEntity movie) {
        return movieWishlistRepository.save(new MovieWishlistEntity(user, movie));
    }

    public void userUnwishlistMovie(int userId, int movieId) {
        movieWishlistRepository.deleteByBuyerIdAndMovieId(userId, movieId);
    }

    public boolean hasUserWishlistMovie(int userId, int movieId) {
        return movieWishlistRepository.existsByBuyerIdAndMovieId(userId, movieId);
    }
}
