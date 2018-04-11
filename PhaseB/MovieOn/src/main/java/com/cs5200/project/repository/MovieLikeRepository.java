package com.cs5200.project.repository;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.MovieLikeEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface MovieLikeRepository extends CrudRepository<MovieLikeEntity, Integer> {

    @Query("select count(m) from MovieLikeEntity m where movie_id = ?1")
    int getLikeCountForMovie(int movieId);

    @Transactional
    void deleteByBuyerIdAndMovieId(int userId, int movieId);

    boolean existsByBuyerIdAndMovieId(int userId, int movieId);

    List<MovieLikeEntity> findByBuyerId(int userId);
}
