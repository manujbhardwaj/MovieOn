package com.cs5200.project.repository;

import com.cs5200.project.entity.MovieWishlistEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface MovieWishlistRepository extends CrudRepository<MovieWishlistEntity, Integer> {

    @Transactional
    void deleteByBuyerIdAndMovieId(int userId, int movieId);

    boolean existsByBuyerIdAndMovieId(int userId, int movieId);

    List<MovieWishlistEntity> findByBuyerId(int userId);
}
