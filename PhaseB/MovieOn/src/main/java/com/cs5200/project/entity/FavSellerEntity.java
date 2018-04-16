package com.cs5200.project.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "buyer_favSeller_association"))
    private UserEntity buyer;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "seller_favSeller_association"))
    private UserEntity seller;

    public FavSellerEntity() {
    }

    public FavSellerEntity(UserEntity buyer, UserEntity seller) {
        this.buyer = buyer;
        this.seller = seller;
    }

    @Override
    public String toString() {
        return "FavSellerEntity{" +
                "id=" + id +
                ", buyer=" + buyer +
                ", seller=" + seller +
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

    public UserEntity getSeller() {
        return seller;
    }

    public void setSeller(UserEntity seller) {
        this.seller = seller;
    }
}
