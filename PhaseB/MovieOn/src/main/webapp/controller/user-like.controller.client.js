(function () {
    angular
        .module("MovieOn")
        .controller("userLikeController", userLikeController);
    function userLikeController(userService, movieService, $location, loggedIn) {
        var vm = this;
        if(loggedIn){
            vm.userId = loggedIn.id;
            vm.user = loggedIn;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.getMovieDetails = getMovieDetails;
        vm.logout = logout;
        vm.unlikeMovie = unlikeMovie;
        vm.contactAdmin = contactAdmin;

        function contactAdmin() {
            $location.url("/contact");
        }

        function init() {
            movieService
                .getUserLike(vm.userId)
                .then(function (value) {
                    console.log(value);
                    vm.movieList = value.data;
                }, function (reason) {

                });
            openNav();
            $(window).width(function() {
                if ($(this).width() <= 768) {
                    closeNav();
                }
                else{
                    openNav();
                }
            });
        }
        init();

        function unlikeMovie(movieId, index) {
            UserService
                .unlikeMovie(userId, movieId)
                .then(function (res) {
                    vm.movieList[index].data.liked = false;
                });
        }

        function logout() {
            UserService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                }, function (err) {
                    vm.error = "Problem";
                });
        }

        function getMovies(movies) {
            var movieList = [];
            for(var i = 0; i < movies.length; i++){
                MovieService
                    .getMovieDetails(movies[i])
                    .then(function(response) {
                        response.data.backdrop_path = 'https://image.tmdb.org/t/p/w780'+response.data.backdrop_path;
                        response.data.poster_path = 'https://image.tmdb.org/t/p/w780'+response.data.poster_path;
                        response.data.liked = true;
                        movieList.push(response);
                    });
            }
            vm.movieList = movieList;
        }

        function openNav() {
            vm.open = null;
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }

        function closeNav() {
            vm.open = "open";
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        function gotoHome() {
            $location.url('/home');
        }

        function getMovieDetails(movieId) {
            $location.url('/movie/' + movieId);
        }

        $(window).resize(function() {
            if ($(this).width() <= 768) {
                closeNav();
            }
            else{
                openNav();
            }
        });
    }
})();