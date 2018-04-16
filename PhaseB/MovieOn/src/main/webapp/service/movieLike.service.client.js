(function () {
    angular
        .module("MovieOn")
        .factory("movieLikeService", movieLikeService);
    function movieLikeService($http) {
        var api = {
            "likeMovie" : likeMovie,
            "unlikeMovie" : unlikeMovie,
            "hasUserLikedMovie" : hasUserLikedMovie,
            "getUserLike": getUserLike,
            "getMovieLike": getMovieLike
        };
        return api;

        function hasUserLikedMovie(userId, movieId) {
            return $http.get("api/movieLike/" + movieId + "/user/" + userId + "/liked");
        }

        function getUserLike(userId) {
            return $http.get("api/movieLike/user/" + userId + "/like");
        }

        function likeMovie(userId, movie) {
            return $http.post("api/movieLike/user/" + userId + "/like", movie);
        }

        function unlikeMovie(userId, movieId) {
            return $http.put("api/movieLike/" + movieId + "/user/" + userId + "/unlike");
        }

        function getMovieLike(movieId) {
            return $http.get("api/movieLike/movie/" + movieId);
        }
    }
})();