package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

/**
 * MovieWishList entity.
 */
@Entity
@Table(name = "MovieWishList")
public class MovieWishlistEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "buyer_movieWishlist_association"))
    private UserEntity buyer;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "movie_movieWishlist_association"))
    private MovieEntity movie;
    @Column(name = "wishlistDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date wishlistDateTime;

    public MovieWishlistEntity() {
    }

    public MovieWishlistEntity(UserEntity buyer, MovieEntity movie) {
        this.buyer = buyer;
        this.movie = movie;
    }

    @Override
    public String toString() {
        return "MovieWishlistEntity{" +
                "id=" + id +
                ", buyer=" + buyer +
                ", movie=" + movie +
                ", wishlistDateTime=" + wishlistDateTime +
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

    public Date getWishlistDateTime() {
        return wishlistDateTime;
    }

    public void setWishlistDateTime(Date wishlistDateTime) {
        this.wishlistDateTime = wishlistDateTime;
    }
}

