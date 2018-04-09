(function () {
    angular
        .module("MovieOn")
        .factory("movieService", movieService);
    function movieService($http) {
        var api = {
            "getPopularMovies": getPopularMovies,
            "getUpcomingMovies": getUpcomingMovies

        };
        return api;

        function getPopularMovies() {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1";

            var url = urlBase.replace("API_KEY", key);
            return $http.get(url);
        }

        function getUpcomingMovies() {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/upcoming?api_key=API_KEY&language=en-US&page=1";

            var url = urlBase.replace("API_KEY", key);
            return $http.get(url);
        }
    }
})();