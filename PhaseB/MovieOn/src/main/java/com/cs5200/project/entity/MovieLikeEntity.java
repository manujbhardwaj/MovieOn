package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * MovieLike entity.
 */
@Entity
@Table(name = "MovieLike")
public class MovieLikeEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "likedDateTime")
    private String likedDateTime;

    public MovieLikeEntity(String likedDateTime) {
        this.likedDateTime = likedDateTime;
    }

    public MovieLikeEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLikedDateTime() {
        return likedDateTime;
    }

    public void setLikedDateTime(String likedDateTime) {
        this.likedDateTime = likedDateTime;
    }
}

