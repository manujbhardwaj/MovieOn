package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * User entity.
 */
@Entity
@Table(name = "User")
public class UserEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "type")
    private String type;
    @Column(name = "username")
    private String username;
    @Column(name = "passwrd")
    private String passwrd;
    @Column(name = "email")
    private String email;
    @Column(name = "approved")
    private boolean approved;

    public UserEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswrd() {
        return passwrd;
    }

    public void setPasswrd(String passwrd) {
        this.passwrd = passwrd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    public UserEntity(String firstName, String lastName, String type, String username, String passwrd, String email, boolean approved) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.type = type;
        this.username = username;
        this.passwrd = passwrd;
        this.email = email;
        this.approved = approved;
    }
}
