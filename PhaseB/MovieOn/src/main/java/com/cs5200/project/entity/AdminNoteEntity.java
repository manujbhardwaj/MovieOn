package com.cs5200.project.entity;

import javax.persistence.*;

@Entity
@Table(name = "AdminNote")
public class AdminNoteEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(foreignKey = @ForeignKey(name = "contactAdmin_user_association"))
    private UserEntity user;
    @Column(name = "description")
    private String description;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;

    public AdminNoteEntity() {
    }

    public AdminNoteEntity(UserEntity user, String description, String firstName, String lastName, String email) {
        this.user = user;
        this.description = description;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    @Override
    public String toString() {
        return "AdminNoteEntity{" +
                "id=" + id +
                ", user=" + user +
                ", description='" + description + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
