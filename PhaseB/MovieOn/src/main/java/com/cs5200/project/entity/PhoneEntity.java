package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * Phone entity.
 */
@Entity
@Table(name = "Phone")
public class PhoneEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "phone")
    private String phone;
    @Column(name = "primaryPhone")
    private boolean primaryPhone;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "phone_user_association"))
    private UserEntity user;

    public PhoneEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isPrimaryPhone() {
        return primaryPhone;
    }

    public void setPrimaryPhone(boolean primaryPhone) {
        this.primaryPhone = primaryPhone;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public PhoneEntity(String phone, boolean primaryPhone, UserEntity user) {
        this.phone = phone;
        this.primaryPhone = primaryPhone;
        this.user = user;
    }
}

