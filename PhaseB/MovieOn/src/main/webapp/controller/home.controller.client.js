(function () {
    angular
        .module("MovieOn")
        .controller("homeController", homeController);
    function homeController(currentUser, apiService, userService, $location) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.searchTitle = searchTitle;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;

        $("a.carousel-control").click(function(e){
            e.preventDefault();
            $(this).parent().carousel($(this).data("slide"));
        });

        $(window).width(function() {
            if ($(this).width() <= 768) {
                closeNav();
            }
            else{
                openNav();
            }
        });

        function init() {
            $(window).width(function() {
                if ($(this).width() <= 768) {
                    closeNav();
                }
                else{
                    openNav();
                }
            });

            $("#myCarousel").carousel({
                interval : 5000,
                pause: false
            });

            apiService
                .getPopularMovies()
                .then(function(response) {
                    var movies = response.data.results;
                    for(var i = 0; i < movies.length; i++){
                        movies[i].backdrop_path = 'http://image.tmdb.org/t/p/w780' + movies[i].backdrop_path;
                    }
                    vm.movies = movies;
                });

            var upcomingMovies = [];

            apiService
                .getUpcomingMovies()
                .then(function(response) {
                    var movies = response.data.results;
                    for(var i = 0; i < 5; i++){
                        movies[i].backdrop_path = 'http://image.tmdb.org/t/p/original' + movies[i].backdrop_path;
                        upcomingMovies.push(movies[i]);
                    }
                    vm.upcomingMovies = upcomingMovies;
                });
        }
        init();

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

        function searchTitle(search) {
            $location.url("/search/" + search);
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
    }
})();