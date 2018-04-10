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
    @Column(name = "type")
    private String type;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "phone_user_association"))
    private UserEntity user;

    public PhoneEntity() {
    }

    public PhoneEntity(String phoneNo, String type, UserEntity user) {
        this.phoneNo = phoneNo;
        this.type = type;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

