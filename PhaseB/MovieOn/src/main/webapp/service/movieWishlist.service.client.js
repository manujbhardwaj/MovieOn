(function () {
    angular
        .module("MovieOn")
        .factory("movieWishlistService", movieWishlistService);
    function movieWishlistService($http) {
        var api = {
            "wishlistMovie" : wishlistMovie,
            "unWishListMovie" : unwishlistMovie,
            "hasUserWishlistMovie" : hasUserWishlistMovie,
            "getUserWishlist" : getUserWishlist
        };
        return api;

        function hasUserWishlistMovie(userId, movieId) {
            return $http.get("api/movieWishlist/" + movieId + "/user/" + userId + "/wishlist");
        }

        function getUserWishlist(userId) {
            return $http.get("api/movieWishlist/user/" + userId + "/wishlist");
        }

        function wishlistMovie(userId, movie) {
            return $http.post("api/movieWishlist/user/" + userId + "/wishlist", movie);
        }

        function unwishlistMovie(userId, movieId) {
            return $http.put("api/movieWishlist/" + movieId + "/user/" + userId + "/unwishlist");
        }
    }
})();