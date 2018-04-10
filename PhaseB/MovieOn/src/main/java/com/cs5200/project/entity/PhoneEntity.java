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
    @Column(name = "phoneNo")
    private String phoneNo;

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
        return phoneNo;
    }

    public void setPhone(String phone) {
        this.phoneNo = phone;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public PhoneEntity(String phone, UserEntity user) {
        this.phoneNo = phone;
        this.user = user;
    }
}

