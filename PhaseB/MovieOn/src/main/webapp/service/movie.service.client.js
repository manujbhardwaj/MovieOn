(function () {
    angular
        .module("MovieOn")
        .factory("movieService", movieService);
    function movieService($http) {
        var api = {
            "sellMovie": sellMovie,
            "buyMovie": buyMovie,
            "getInventoryForMovie": getInventoryForMovie,
            "updateInventoryForMovie": updateInventoryForMovie,
            "getSellerInventory": getSellerInventory,
            "getAllSellerForMovie": getAllSellerForMovie
        };
        return api;

        function getSellerInventory (userId) {
            return $http.get("api/movie/user/" +userId+"/inventory");
        }

        function getAllSellerForMovie (movieId) {
            return $http.get("api/movie/" +movieId+"/inventory");
        }

        function getInventoryForMovie(userId, movieId) {
            return $http.get("api/movie/" + movieId + "/user/" + userId + "/copies");
        }

        function sellMovie(userId, movie, copies) {
            return $http.post("api/movie/user/" + userId + "/sell/copies/" + copies, movie);
        }

        function buyMovie(buyerId, sellerId, movieId) {
            return $http.put("api/movie/"+movieId+"/buyer/" + buyerId + "/seller/"+sellerId+"/buy");
        }

        function updateInventoryForMovie(inventory) {
            console.log(inventory);
            return $http.put("api/movie/inventory", inventory);
        }
    }
})();