package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * FavSeller entity.
 */
@Entity
@Table(name = "FavSeller")
public class FavSellerEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "review")
    private String review;
    @Column(name = "rating")
    private String rating;

    public FavSellerEntity() {
    }

    public FavSellerEntity(String review, String rating) {
        this.review = review;
        this.rating = rating;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}
