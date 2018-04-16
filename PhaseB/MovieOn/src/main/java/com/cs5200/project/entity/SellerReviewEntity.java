package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

/**
 * SellerReview entity.
 */
@Entity
@Table(name = "SellerReview")
public class SellerReviewEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Lob
    @Column(name = "review")
    private String review;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "buyer_sellerReview_association"))
    private UserEntity buyer;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "seller_sellerReview_association"))
    private UserEntity seller;
    @Column(name = "reviewDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date reviewDateTime;

    public SellerReviewEntity() {
    }

    public SellerReviewEntity(String review, UserEntity buyer, UserEntity seller) {
        this.review = review;
        this.buyer = buyer;
        this.seller = seller;
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

    public Date getReviewDateTime() {
        return reviewDateTime;
    }

    public void setReviewDateTime(Date reviewDateTime) {
        this.reviewDateTime = reviewDateTime;
    }
}
