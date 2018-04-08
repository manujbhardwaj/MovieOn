package com.cs5200.project.entity;

import javax.persistence.*;

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

    public SellerReviewEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
