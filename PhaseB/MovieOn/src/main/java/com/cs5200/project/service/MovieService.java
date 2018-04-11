package com.cs5200.project.service;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public MovieEntity insertMovie(MovieEntity movie) {
        return movieRepository.save(movie);
    }

    public MovieEntity getMovieById(int movieId) {
        return movieRepository.findById(movieId);
    }
}
