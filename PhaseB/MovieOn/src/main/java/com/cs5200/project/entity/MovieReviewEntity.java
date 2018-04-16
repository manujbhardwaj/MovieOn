package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

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
    @Lob
    @Column(name = "review")
    private String review;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "critic_movieReview_association"))
    private UserEntity critic;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "movie_movieReview_association"))
    private MovieEntity movie;
    @Column(name = "reviewDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date reviewDateTime;

    public MovieReviewEntity() {
    }

    public MovieReviewEntity(String review, UserEntity critic, MovieEntity movie) {
        this.review = review;
        this.critic = critic;
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

    public UserEntity getCritic() {
        return critic;
    }

    public void setCritic(UserEntity critic) {
        this.critic = critic;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }

    public Date getLikeDateTime() {
        return reviewDateTime;
    }

    public void setLikeDateTime(Date likeDateTime) {
        this.reviewDateTime = likeDateTime;
    }
}
