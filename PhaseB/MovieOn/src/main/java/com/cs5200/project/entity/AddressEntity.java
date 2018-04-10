package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * Address entity.
 */
@Entity
@Table(name = "Address")
public class AddressEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "streetAddress")
    private String streetAddress;
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "postalCode")
    private int postalCode;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "address_user_association"))
    private UserEntity user;

    public AddressEntity() {
    }

    public AddressEntity(String streetAddress, String city, String state, int postalCode, UserEntity user) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

