package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

/**
 * Transaction entity.
 */
@Entity
@Table(name = "Transaction")
public class TransactionEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "buyer_transaction_association"))
    private UserEntity buyer;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "seller_transaction_association"))
    private UserEntity seller;
    @ManyToOne(optional = false, fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "movie_transaction_association"))
    private MovieEntity movie;
    @Column(name = "transactionDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date transactionDateTime;

    public TransactionEntity() {
    }

    public TransactionEntity(UserEntity buyer, UserEntity seller, MovieEntity movie) {
        this.buyer = buyer;
        this.seller = seller;
        this.movie = movie;
    }

    @Override
    public String toString() {
        return "TransactionEntity{" +
                "id=" + id +
                ", buyer=" + buyer +
                ", seller=" + seller +
                ", movie=" + movie +
                ", transactionDateTime=" + transactionDateTime +
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

    public MovieEntity getMovie() {
        return movie;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }

    public Date getTransactionDateTime() {
        return transactionDateTime;
    }

    public void setTransactionDateTime(Date transactionDateTime) {
        this.transactionDateTime = transactionDateTime;
    }
}
