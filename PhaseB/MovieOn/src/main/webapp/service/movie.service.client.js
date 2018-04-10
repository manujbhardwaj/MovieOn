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
            "sellMovie": sellMovie

        };
        return api;

        function hasUserLikedMovie(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/liked");
        }

        function sellMovie(userId, movie, copies) {
            console.log(movie)
            return $http.post("api/movie/user/" + userId + "/sell/copies/" + copies, movie);
        }

        function hasUserWishlistMovie(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/wishlist");
        }

        function likeMovie(userId, movie) {
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