package com.cs5200.project.controller;

import com.cs5200.project.entity.MovieReviewEntity;
import com.cs5200.project.entity.SellerReviewEntity;
import com.cs5200.project.service.MovieReviewService;
import com.cs5200.project.service.MovieService;
import com.cs5200.project.service.SellerReviewService;
import com.cs5200.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/sellerReview")
public class SellerReviewController {

    @Autowired
    private SellerReviewService sellerReviewService;

    @Autowired
    private UserService userService;


    @PostMapping("user/{userId}/seller/{sellerId}/review")
    public SellerReviewEntity postSellerReview(@PathVariable int userId, @PathVariable int sellerId, @RequestBody String review){
        return sellerReviewService.postSellerReview(userService.getUserById(userId), userService.getUserById(sellerId), review);
    }

    @GetMapping("seller/{sellerId}")
    public List<SellerReviewEntity> getSellerReview(@PathVariable int sellerId){

        return sellerReviewService.getSellerReview(sellerId);

    }

}
