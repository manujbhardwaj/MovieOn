package com.cs5200.project.entity;

import javax.persistence.*;

/**
 * Movie entity.
 */
@Entity
@Table(name = "Movie")
public class MovieEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "omdbId")
    private String omdbId;
    @Column(name = "posterUrl")
    private String posterUrl;
    @Column(name = "title")
    private String title;
    @Column(name = "summary")
    private String summary;

    public MovieEntity(String omdbId, String posterUrl, String title, String summary) {
        this.omdbId = omdbId;
        this.posterUrl = posterUrl;
        this.title = title;
        this.summary = summary;
    }

    public MovieEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOmdbId() {
        return omdbId;
    }

    public void setOmdbId(String omdbId) {
        this.omdbId = omdbId;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}
