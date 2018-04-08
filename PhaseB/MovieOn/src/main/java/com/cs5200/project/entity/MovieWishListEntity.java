package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * MovieWishList entity.
 */
@Entity
@Table(name = "MovieWishList")
public class MovieWishListEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "wishlistDateTime")
    private String wishlistDateTime;

    public MovieWishListEntity(String wishlistDateTime) {
        this.wishlistDateTime = wishlistDateTime;
    }

    public MovieWishListEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWishlistDateTime() {
        return wishlistDateTime;
    }

    public void setWishlistDateTime(String wishlistDateTime) {
        this.wishlistDateTime = wishlistDateTime;
    }
}

