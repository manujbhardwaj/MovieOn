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
    @Column(name = "backdropPath")
    private String backdropPath;
    @Column(name = "originalTitle")
    private String originalTitle;
    @Lob
    @Column(name = "overview")
    private String overview;

    public MovieEntity() {
    }

    @Override
    public String toString() {
        return "MovieEntity{" +
                "id='" + id + '\'' +
                ", backdropPath='" + backdropPath + '\'' +
                ", originalTitle='" + originalTitle + '\'' +
                ", overview='" + overview + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBackdropPath() {
        return backdropPath;
    }

    public void setBackdropPath(String backdropPath) {
        this.backdropPath = backdropPath;
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

    public MovieEntity(int id, String backdropPath, String originalTitle, String overview) {
        this.id = id;
        this.backdropPath = backdropPath;
        this.originalTitle = originalTitle;
        this.overview = overview;
    }
}
