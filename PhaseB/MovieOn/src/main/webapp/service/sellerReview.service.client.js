(function () {
    angular
        .module("MovieOn")
        .factory("sellerReviewService", sellerReviewService);
    function sellerReviewService($http) {
        var api = {
            "postSellerReview" : postSellerReview,
            "getSellerReview": getSellerReview,
            "getBuyerReview": getBuyerReview
        };
        return api;

        function postSellerReview (userId, sellerId, review) {
            return $http.post("api/sellerReview/user/" + userId + "/seller/"+ sellerId + "/review", review);
        }

        function getSellerReview (sellerId) {
            return $http.get("api/sellerReview/seller/" + sellerId);
        }

        function getBuyerReview (buyerId) {
            return $http.get("api/sellerReview/buyer/" + buyerId);
        }
    }
})();