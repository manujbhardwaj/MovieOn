## Important Links

The project is hosted on AWS and the link for the project is as follows:

[Project (MovieOn)](http://ec2-18-221-163-240.us-east-2.compute.amazonaws.com:8080/#!/home)

The project video can be found at the following link:

[Project video](https://youtu.be/70mQxQ06naQ)

The link to test the project is:

https://github.com/manujbhardwaj/MovieOn/wiki/Testing

## CS5200
This repository is for Northeastern's coursework **CS5200 Database Management System**


## Team
The repository belongs to:

* Manuj Bhardwaj
* Aditya Kumar

## Instructions to run (not required)

1. Download the project as zip or tar file
2. Unzip it
3. mvn spring-boot:run (run this command on directory where the pom file is: PhaseB/MovieOn/pom.xml)
4. Goto [Project(MovieOn)](http://localhost:8080/#)

## Project

The team built a project utilizing:

* [AngularJs](https://angularjs.org/)
* [Boostrap](https://getbootstrap.com/)
* [Spring Data JPA](https://projects.spring.io/spring-data-jpa/)

The team built an e-commerce application allowing users to buy DVD copies from sellers.

We have five different types of user in our application.

* Admin: App has an admin user already created. Admin will be able to approve/reject the seller and critic. Unless approved Seller and Critic wont have access to sell and review movies respectively. Users can contact admin and write a note to the Admin. Admin can view the notes and take operations accordingly. 
* Buyer: Buyers will be able to chose and buy movie DVDs from a list of sellers. A buyer can further like/unlike a movie and add/remove a movie to their wishlist. A buyer can mark a seller as favorite. Buyer can also post reviews for specific sellers. A buyer will be able to add review for a particular seller.
* Seller: Sellers will be able to add selected movies to their inventory. The inventory will contain the movie list along with the number of copies of each movie.
* Critic: Critic can add reviews for a particular movie which will be visible to other users on the movie page.
* Anonymous User: Anonymous user can browse and search movies and get movie details but they wont be able to buy, like, wishlist a movie and add reviews for seller.
* In addition every user can do login, contact admin, search for a movie, add or update address and phone.
