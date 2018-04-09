(function () {
    angular
        .module("MovieOn")
        .factory("apiService", apiService);
    function apiService($http) {
        var api = {
            "getPopularMovies": getPopularMovies,
            "getUpcomingMovies": getUpcomingMovies,
            "getMovieDetails": getMovieDetails,
            "getMovieCredits": getMovieCredits,
            "getMovieImages": getMovieImages,
            "getMovieVideos": getMovieVideos,
            "getSimilarMovies": getSimilarMovies,
            "getMovieReviews": getMovieReviews,
            "searchTitle": searchTitle

        };
        return api;

        function searchTitle(search) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/search/movie?api_key=API_KEY&query=QUERY&language=en-US&include_adult=false";

            var url = urlBase.replace("API_KEY", key).replace("QUERY", search);
            return $http.get(url);
        }

        function getMovieReviews(movieId) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/MOVIE_ID/reviews?api_key=API_KEY&language=en-US&page=1";

            var url = urlBase.replace("API_KEY", key).replace('MOVIE_ID',movieId);
            return $http.get(url);
        }

        function getMovieCredits(movieId) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/MOVIE_ID/credits?api_key=API_KEY";

            var url = urlBase.replace("API_KEY", key).replace('MOVIE_ID',movieId);
            return $http.get(url);
        }

        function getMovieImages(movieId) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/MOVIE_ID/images?api_key=API_KEY";

            var url = urlBase.replace("API_KEY", key).replace('MOVIE_ID',movieId);
            return $http.get(url);
        }

        function getMovieVideos(movieId) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/MOVIE_ID/videos?api_key=API_KEY";

            var url = urlBase.replace("API_KEY", key).replace('MOVIE_ID',movieId);
            return $http.get(url);
        }

        function getSimilarMovies(movieId) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/MOVIE_ID/similar?api_key=API_KEY";

            var url = urlBase.replace("API_KEY", key).replace('MOVIE_ID',movieId);
            return $http.get(url);
        }

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

        function getMovieDetails(movieId) {
            var key = "68f5b13bd22adaac30e18222782d6b8c";
            var urlBase = "https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=API_KEY&language=en-US";

            var url = urlBase.replace("API_KEY", key).replace("MOVIE_ID", movieId);
            return $http.get(url);
        }
    }
})();