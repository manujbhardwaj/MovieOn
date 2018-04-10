package com.cs5200.project.repository;

import com.cs5200.project.entity.InventoryEntity;
import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.model.InventoryFavSeller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends CrudRepository<InventoryEntity, Integer> {

    InventoryEntity findBySellerIdAndMovieId(int userId, int movieId);
    List<InventoryEntity> findBySellerId(int userId);

    @Query("select i, f from InventoryEntity i left join FavSellerEntity f on seller_id = seller_id where movie_id = ?1 and buyer_id = ?2")
//    select * from inventory i left join (select * from fav_seller where buyer_id = 6) f on i.seller_id = f.seller_id where i.movie_id = 337167
    List<InventoryFavSeller> getMovieDetails(int movieId, int userId);
}
