package com.cs5200.project.entity;

import org.hibernate.annotations.CreationTimestamp;
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
    @Column(name = "createdDateTime", nullable = false, updatable = false)
    @CreationTimestamp
    private Date createdDateTime;
    @Column(name = "updatedDateTime", nullable = false, updatable = false)
    @UpdateTimestamp
    private Date updatedDateTime;

    public InventoryEntity() {
    }

    public InventoryEntity(int copies) {
        this.copies = copies;
    }

    @Override
    public String toString() {
        return "InventoryEntity{" +
                "id=" + id +
                ", copies='" + copies + '\'' +
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
}
