package com.cs5200.project.model;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.UserEntity;

import java.util.Date;

public class InventoryFavSeller {

    private int id;
    private int copies;
    private UserEntity seller;
    private MovieEntity movie;
    private Date createdDateTime;
    private Date updatedDateTime;

    private int id2;
    private int buyerId;
    private UserEntity seller2;

    public InventoryFavSeller() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCopies() {
        return copies;
    }

    public void setCopies(int copies) {
        this.copies = copies;
    }

    public UserEntity getSeller() {
        return seller;
    }

    public void setSeller(UserEntity seller) {
        this.seller = seller;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }

    public Date getCreatedDateTime() {
        return createdDateTime;
    }

    public void setCreatedDateTime(Date createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

    public Date getUpdatedDateTime() {
        return updatedDateTime;
    }

    public void setUpdatedDateTime(Date updatedDateTime) {
        this.updatedDateTime = updatedDateTime;
    }

    public int getId2() {
        return id2;
    }

    public void setId2(int id2) {
        this.id2 = id2;
    }

    public int getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(int buyerId) {
        this.buyerId = buyerId;
    }

    public UserEntity getSeller2() {
        return seller2;
    }

    public void setSeller2(UserEntity seller2) {
        this.seller2 = seller2;
    }

    public InventoryFavSeller(int id, int copies, UserEntity seller, MovieEntity movie, Date createdDateTime, Date updatedDateTime, int id2, int buyerId, UserEntity seller2) {
        this.id = id;
        this.copies = copies;
        this.seller = seller;
        this.movie = movie;
        this.createdDateTime = createdDateTime;
        this.updatedDateTime = updatedDateTime;
        this.id2 = id2;
        this.buyerId = buyerId;
        this.seller2 = seller2;
    }
}
