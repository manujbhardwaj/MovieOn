package com.cs5200.project.entity;

import javax.persistence.*;

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
    @Column(name = "transactionDateTime")
    private String transactionDateTime;

    public TransactionEntity(String transactionDateTime) {
        this.transactionDateTime = transactionDateTime;
    }

    public TransactionEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTransactionDateTime() {
        return transactionDateTime;
    }

    public void setTransactionDateTime(String transactionDateTime) {
        this.transactionDateTime = transactionDateTime;
    }
}
