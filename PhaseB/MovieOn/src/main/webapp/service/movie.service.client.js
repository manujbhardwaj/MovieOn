(function () {
    angular
        .module("MovieOn")
        .factory("movieService", movieService);
    function movieService($http) {
        var api = {
            "sellMovie": sellMovie,
            "getInventory": getInventory,
            "updateInventory": updateInventory,
            "getSellerInventory": getMovieInventory,
            "getAllSellerForMovie": getAllSellerForMovie
        };
        return api;

        function getSellerInventory (userId) {
            return $http.get("api/movie/user/" +userId+"/inventory");
        }

        function getAllSellerForMovie (movieId) {
            return $http.get("api/movie/" +movieId+"/inventory");
        }

        function getInventory(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/copies");
        }

        function sellMovie(userId, movie, copies) {
            return $http.post("api/movie/user/" + userId + "/sell/copies/" + copies, movie);
        }

        function updateInventory(inventory) {
            return $http.put("api/movie/inventory", inventory);
        }
    }
})();