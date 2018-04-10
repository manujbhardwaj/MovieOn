package com.cs5200.project.model;

import com.cs5200.project.entity.MovieEntity;
import com.cs5200.project.entity.UserEntity;

import java.util.Date;

public class InventoryFavSeller {

    private int id;
    private int copies;
    private UserEntity seller;
    private MovieEntity movie;
    private Date createdDateTime;
    private Date updatedDateTime;

    private int id2;
    private int buyerId;
    private UserEntity seller2;
}
