(function () {
    angular
        .module("MovieOn")
        .factory("movieService", movieService);
    function movieService($http) {
        var api = {
            "likeMovie" : likeMovie,
            "unlikeMovie" : unlikeMovie,
            "hasUserLikedMovie" : hasUserLikedMovie,
            "hasUserWishlistMovie" : hasUserWishlistMovie,
            "wishlistMovie" : wishlistMovie,
            "unwishlistMovie" : unwishlistMovie,
            "sellMovie": sellMovie,
            "getInventory": getInventory,
            "updateInventory": updateInventory,
            "getMovieInventory": getMovieInventory,
            "getMovieDetails": getMovieDetails,
            "favSeller": favSeller,
            "getFavSeller": getFavSeller,
            "getUserLike": getUserLike

        };
        return api;

        function hasUserLikedMovie(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/liked");
        }

        function getUserLike(userId) {
            return $http.get("api/movie/user/" + userId + "/like");
        }

        function favSeller(userId, seller) {
            return $http.post("api/movie/user/" + userId + "/seller/fav", seller);
        }

        function getMovieInventory(userId) {
            return $http.get("api/movie/user/" +userId+"/inventory");
        }

        function getMovieDetails(movieId) {
            return $http.get("api/movie/" +movieId+"/inventory");
        }

        function getFavSeller(userId) {
            return $http.get("api/movie/user/" +userId+"/fav");
        }


        function getInventory(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/copies");
        }

        function sellMovie(userId, movie, copies) {
            console.log(movie)
            return $http.post("api/movie/user/" + userId + "/sell/copies/" + copies, movie);
        }

        function updateInventory(inventory) {
            return $http.put("api/movie/inventory", inventory);
        }

        function hasUserWishlistMovie(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/wishlist");
        }

        function likeMovie(userId, movie) {
            console.log(movie);
            return $http.post("api/movie/user/" + userId + "/like", movie);
        }

        function unlikeMovie(userId, movieId) {
            return $http.put("api/movie/" + movieId + "/user/" + userId + "/unlike");
        }

        function wishlistMovie(userId, movie) {
            return $http.post("api/movie/user/" + userId + "/wishlist", movie);
        }

        function unwishlistMovie(userId, movieId) {
            return $http.put("api/movie/" + movieId + "/user/" + userId + "/unwishlist");
        }
    }
})();