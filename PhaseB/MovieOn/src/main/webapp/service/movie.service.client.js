(function () {
    angular
        .module("MovieOn")
        .factory("movieService", movieService);
    function movieService($http) {
        var api = {
            "sellMovie": sellMovie,
            "getInventory": getInventory,
            "updateInventory": updateInventory,
            "getMovieInventory": getMovieInventory,
            "getMovieDetails": getMovieDetails,
            "favSeller": favSeller,
            "getFavSeller": getFavSeller
        };
        return api;

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
            return $http.post("api/movie/user/" + userId + "/sell/copies/" + copies, movie);
        }

        function updateInventory(inventory) {
            return $http.put("api/movie/inventory", inventory);
        }

    }
})();