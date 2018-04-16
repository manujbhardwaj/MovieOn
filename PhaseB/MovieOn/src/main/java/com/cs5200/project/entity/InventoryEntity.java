package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Inventory entity.
 */
@Entity
@Table(name = "Inventory")
public class InventoryEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "copies")
    private int copies;
    @OnDelete(action = OnDeleteAction.CASCADE)
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

    public InventoryEntity() {
    }

    public InventoryEntity(int copies, UserEntity seller, MovieEntity movie) {
        this.copies = copies;
        this.seller = seller;
        this.movie = movie;
    }

    @Override
    public String toString() {
        return "InventoryEntity{" +
                "id=" + id +
                ", copies=" + copies +
                ", seller=" + seller +
                ", movie=" + movie +
                ", createdDateTime=" + createdDateTime +
                ", updatedDateTime=" + updatedDateTime +
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

    public UserEntity getSeller() {
        return seller;
    }

    public void setSeller(UserEntity buyer) {
        this.seller = buyer;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }
}
