(function () {
    angular
        .module("MovieOn")
        .factory("favSellerService", favSellerService);
    function favSellerService ($http) {
        var api = {
            "favSeller": favSeller,
            "unfavSeller": unfavSeller,
            "getFavSeller": getFavSeller
        };
        return api;

        function favSeller(userId, seller) {
            return $http.post("api/favSeller/user/" + userId + "/seller/fav", seller);
        }

        function unfavSeller(userId, sellerId) {
            return $http.delete("api/favSeller/user/" + userId + "/seller/"+sellerId+"/unfav");
        }

        function getFavSeller(userId) {
            return $http.get("api/favSeller/user/" +userId+ "/fav");
        }
    }
})();