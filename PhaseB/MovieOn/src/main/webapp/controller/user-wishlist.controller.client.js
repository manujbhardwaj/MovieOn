(function () {
    angular
        .module("WebAppMaker")
        .controller("UserWishlistController", userWishlistController);
    function userWishlistController(UserService, MovieService, $location, loggedIn) {
        var vm = this;
        if(loggedIn){
            var userId = loggedIn._id;
            vm.userId = userId;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.getMovieDetails = getMovieDetails;
        vm.logout = logout;
        vm.unWishlistMovie = unWishlistMovie;
        vm.contactAdmin = contactAdmin;

        function contactAdmin() {
            $location.url("/contact");
        }

        function init() {
            UserService
                .findUserById(userId)
                .then(function (user) {
                    vm.user = user;
                    if(user.moviesWishlist.length == 0)
                        vm.message = "You have no wishlist items";
                    else
                        getMovies(user.moviesWishlist);
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

        function unWishlistMovie(movieId, index) {
            UserService
                .unWishListMovie(userId, movieId)
                .then(function (res) {
                    vm.movieList[index].data.wishlist = false;
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
                        response.data.wishlist = true;
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