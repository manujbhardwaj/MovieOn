package com.cs5200.project.model;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.UserEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

public class InventoryFavSeller {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "copies")
    private int copies;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "seller_inventory_association"))
    private UserEntity seller;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "movie_inventory_association"))
    private MovieEntity movie;
    @Column(name = "createdDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date createdDateTime;
    @Column(name = "updatedDateTime", nullable = false, updatable = false)
    @UpdateTimestamp
    private Date updatedDateTime;

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id2;
    @Column(name = "buyerId")
    private int buyerId;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "seller_favSeller_association"))
    private UserEntity seller2;

    public InventoryFavSeller() {
    }

    @Override
    public String toString() {
        return "InventoryFavSeller{" +
                "id=" + id +
                ", copies=" + copies +
                ", seller=" + seller +
                ", movie=" + movie +
                ", createdDateTime=" + createdDateTime +
                ", updatedDateTime=" + updatedDateTime +
                ", id2=" + id2 +
                ", buyerId=" + buyerId +
                ", seller2=" + seller2 +
                '}';
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

    public InventoryFavSeller(int copies, UserEntity seller, MovieEntity movie, Date createdDateTime, Date updatedDateTime, int buyerId, UserEntity seller2) {
        this.copies = copies;
        this.seller = seller;
        this.movie = movie;
        this.createdDateTime = createdDateTime;
        this.updatedDateTime = updatedDateTime;
        this.buyerId = buyerId;
        this.seller2 = seller2;
    }
}
