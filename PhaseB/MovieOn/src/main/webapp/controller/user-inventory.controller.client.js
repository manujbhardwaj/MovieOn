(function () {
    angular
        .module("MovieOn")
        .controller("inventoryController", inventoryController);
    function inventoryController(userService, movieService, $location, currentUser) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.getMovieDetails = getMovieDetails;
        vm.logout = logout;
        vm.updateMovie = updateMovie;
        vm.contactAdmin = contactAdmin;

        function contactAdmin() {
            $location.url("/contact");
        }

        function init() {
            getMovies();
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

        function updateMovie(num, movieId) {
            if(num < 0)
                num = 0;
            UserService
                .updateMovie(userId, movieId, num)
                .then(function (response) {
                    // alert("Item updated successfully");
                    // $location.url('/home');
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

        function getMovies() {
            movieService
                .getSellerInventory(vm.userId)
                .then(function (value) {
                    vm.movieList = value.data;
                }, function (reason) {

                });
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