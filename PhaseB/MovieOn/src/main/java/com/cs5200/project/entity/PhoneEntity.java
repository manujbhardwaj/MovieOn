package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * Phone entity.
 */
@Entity
@Table(name = "Address")
public class PhoneEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "phone")
    private String phone;
    @Column(name = "primary")
    private boolean primary;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "address_user_association"))
    private UserEntity user;

    public PhoneEntity(String phone, Boolean primary, UserEntity user) {
        this.phone = phone;
        this.primary = primary;
        this.user = user;
    }

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

    public Boolean getPrimary() {
        return primary;
    }

    public void setPrimary(Boolean primary) {
        this.primary = primary;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

