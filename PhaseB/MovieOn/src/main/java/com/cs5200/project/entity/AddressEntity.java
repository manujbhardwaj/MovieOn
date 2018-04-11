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
    @Column(name = "street1")
    private String street1;
    @Column(name = "street2")
    private String street2;
    @Column(name = "city")
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "zip")
    private int zip;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "address_user_association"))
    private UserEntity user;

    public AddressEntity() {
    }

    @Override
    public String toString() {
        return "AddressEntity{" +
                "id=" + id +
                ", street1='" + street1 + '\'' +
                ", street2='" + street2 + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip=" + zip +
                ", user=" + user +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStreet1() {
        return street1;
    }

    public void setStreet1(String street1) {
        this.street1 = street1;
    }

    public String getStreet2() {
        return street2;
    }

    public void setStreet2(String street2) {
        this.street2 = street2;
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

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public AddressEntity(String street1, String street2, String city, String state, int zip, UserEntity user) {
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.user = user;
    }
}

