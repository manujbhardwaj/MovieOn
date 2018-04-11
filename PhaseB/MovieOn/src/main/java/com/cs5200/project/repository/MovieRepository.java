package com.cs5200.project.repository;

import com.cs5200.project.entity.MovieEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<MovieEntity, Integer> {

    MovieEntity findById(int movieId);
}
