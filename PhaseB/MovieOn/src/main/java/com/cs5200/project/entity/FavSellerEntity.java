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
    @Column(name = "buyerId")
    private int buyerId;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "seller_favSeller_association"))
    private UserEntity seller;

    public FavSellerEntity() {
    }

    public FavSellerEntity(int buyerId, UserEntity seller) {
        this.buyerId = buyerId;
        this.seller = seller;
    }

    @Override
    public String toString() {
        return "FavSellerEntity{" +
                "id=" + id +
                ", buyerId=" + buyerId +
                ", seller=" + seller +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(int buyerId) {
        this.buyerId = buyerId;
    }

    public UserEntity getSeller() {
        return seller;
    }

    public void setSeller(UserEntity seller) {
        this.seller = seller;
    }
}
