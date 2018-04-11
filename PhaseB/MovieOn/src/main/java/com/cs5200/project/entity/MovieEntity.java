package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * Movie entity.
 */
@Entity
@Table(name = "Movie")
public class MovieEntity {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "backdrop_path")
    private String backdrop_path;
    @Column(name = "original_title")
    private String originalTitle;
    @Lob
    @Column(name = "overview")
    private String overview;

    public MovieEntity() {
    }

    @Override
    public String toString() {
        return "MovieEntity{" +
                "id=" + id +
                ", backdrop_path='" + backdrop_path + '\'' +
                ", originalTitle='" + originalTitle + '\'' +
                ", overview='" + overview + '\'' +
                '}';
    }

    public MovieEntity(int id, String backdrop_path, String originalTitle, String overview) {
        this.id = id;
        this.backdrop_path = backdrop_path;
        this.originalTitle = originalTitle;
        this.overview = overview;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBackdrop_path() {
        return backdrop_path;
    }

    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }

    public String getOriginalTitle() {
        return originalTitle;
    }

    public void setOriginalTitle(String originalTitle) {
        this.originalTitle = originalTitle;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }
}
