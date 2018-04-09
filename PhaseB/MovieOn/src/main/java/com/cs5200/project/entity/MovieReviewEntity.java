package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * MovieReview entity.
 */
@Entity
@Table(name = "MovieReview")
public class MovieReviewEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "review")
    private String review;
    @Column(name = "rating")
    private String rating;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "movie_movieReview_association"))
    private MovieEntity movie;

    public MovieReviewEntity() {
    }

    public MovieReviewEntity(String review, String rating, MovieEntity movie) {
        this.review = review;
        this.rating = rating;
        this.movie = movie;
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

    public MovieEntity getMovie() {
        return movie;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }
}
