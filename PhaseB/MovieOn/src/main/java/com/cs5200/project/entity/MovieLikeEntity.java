package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * MovieLike entity.
 */
@Entity
@Table(name = "MovieLike")
public class MovieLikeEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "buyer_movieLike_association"))
    private UserEntity buyer;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "movie_movieLike_association"))
    private MovieEntity movie;
    @Column(name = "likeDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date likeDateTime;

    public MovieLikeEntity() {
    }

    @Override
    public String toString() {
        return "MovieLikeEntity{" +
                "id=" + id +
                ", buyer=" + buyer +
                ", movie=" + movie +
                ", likeDateTime=" + likeDateTime +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UserEntity getBuyer() {
        return buyer;
    }

    public void setBuyer(UserEntity buyer) {
        this.buyer = buyer;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }

    public Date getLikeDateTime() {
        return likeDateTime;
    }

    public void setLikeDateTime(Date likeDateTime) {
        this.likeDateTime = likeDateTime;
    }

    public MovieLikeEntity(UserEntity buyer, MovieEntity movie) {
        this.buyer = buyer;
        this.movie = movie;
    }
}

