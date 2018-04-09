package com.cs5200.project.controller;

import com.cs5200.project.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class MovieController {

    @Autowired
    private MovieService movieService;
}
