package com.cs5200.project.entity;

import javax.persistence.*;

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
    private String copies;
    @Column(name = "createdDateTime")
    private boolean createdDateTime;
    @Column(name = "updatedDateTime")
    private boolean updatedDateTime;

    public InventoryEntity(String copies, boolean createdDateTime, boolean updatedDateTime) {
        this.copies = copies;
        this.createdDateTime = createdDateTime;
        this.updatedDateTime = updatedDateTime;
    }

    public InventoryEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCopies() {
        return copies;
    }

    public void setCopies(String copies) {
        this.copies = copies;
    }

    public boolean isCreatedDateTime() {
        return createdDateTime;
    }

    public void setCreatedDateTime(boolean createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

    public boolean isUpdatedDateTime() {
        return updatedDateTime;
    }

    public void setUpdatedDateTime(boolean updatedDateTime) {
        this.updatedDateTime = updatedDateTime;
    }
}
