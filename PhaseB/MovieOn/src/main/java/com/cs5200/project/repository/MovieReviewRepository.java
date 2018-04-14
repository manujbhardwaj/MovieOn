package com.cs5200.project.repository;

import com.cs5200.project.entity.MovieReviewEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MovieReviewRepository extends CrudRepository<MovieReviewEntity, Integer> {

    List<MovieReviewEntity> findAllByMovieId(int movieId);
}
