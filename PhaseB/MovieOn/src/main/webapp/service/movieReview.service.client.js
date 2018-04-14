(function () {
    angular
        .module("MovieOn")
        .factory("movieReviewService", movieReviewService);
    function movieReviewService($http) {
        var api = {
            "postReview" : postReview,
            "getReviewForMovie": getReviewForMovie
        };
        return api;

        function postReview (userId, movieReview) {
            return $http.post("api/movieReview/user/" + userId + "/review", movieReview);
        }

        function getReviewForMovie (movieId) {
            return $http.get("api/movieReview/movie/" + movieId + "/review");
        }
    }
})();