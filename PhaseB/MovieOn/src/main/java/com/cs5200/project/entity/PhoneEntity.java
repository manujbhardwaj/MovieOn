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
    @Column(name = "number")
    private String number;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "phone_user_association"))
    private UserEntity user;

    public PhoneEntity() {
    }

    public PhoneEntity(String number, UserEntity user) {
        this.number = number;
        this.user = user;
    }

    @Override
    public String toString() {
        return "PhoneEntity{" +
                "id=" + id +
                ", number='" + number + '\'' +
                ", user=" + user +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

