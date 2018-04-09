(function () {
    angular
        .module("MovieOn")
        .controller("homeController", homeController);
    function homeController(currentUser, movieService, userService) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }
        vm.open = true;

        /*event handlers*/
        vm.getMovieDetails = getMovieDetails;
        vm.searchTitle = searchTitle;
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.contactAdmin = contactAdmin;

        $("a.carousel-control").click(function(e){
            e.preventDefault();
            $(this).parent().carousel($(this).data("slide"));
        });

        var upcomingMovies = [];

        function init() {
            $("#myCarousel").carousel({
                interval : 5000,
                pause: false
            });

            movieService
                .getPopularMovies()
                .then(function(response) {
                    var movies = response.data.results;
                    for(var i = 0; i < movies.length; i++){
                        movies[i].backdrop_path = 'http://image.tmdb.org/t/p/w780'+movies[i].backdrop_path;
                    }
                    vm.movies = movies;
                });

            movieService
                .getUpcomingMovies()
                .then(function(response) {
                    var movies = response.data.results;
                    for(var i = 0; i < 5; i++){
                        movies[i].backdrop_path = 'http://image.tmdb.org/t/p/original'+movies[i].backdrop_path;
                        upcomingMovies.push(movies[i]);
                    }
                    vm.upcomingMovies = upcomingMovies;
                });
        }
        init();

        function contactAdmin() {
            $location.url("/contact");
        }

        function logout() {
            userService
                .logout()
                .then(function(response) {
                    vm.user = null;
                    vm.userId = null;
                    closeNav();
                }, function (err) {
                    vm.error = "Problem";
                });
        }

        function openNav() {
            vm.open = false;
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }

        function closeNav() {
            vm.open = true;
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        function getMovieDetails(movieId) {
            $location.url("/movie/" + movieId);
        }

        function gotoHome() {
            $location.url("/home");
        }

        function searchTitle(search) {
            $location.url("/search/" + search);
        }
    }
})();