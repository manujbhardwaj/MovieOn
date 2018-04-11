(function () {
    angular
        .module("MovieOn")
        .controller("userWishlistController", userWishlistController);
    function userWishlistController(userService, movieWishlistService, $location, loggedIn) {
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
        vm.unWishlistMovie = unWishlistMovie;
        vm.contactAdmin = contactAdmin;

        function contactAdmin() {
            $location.url("/contact");
        }

        function init() {
            getUserWishlist();
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

        function unWishlistMovie(movieId) {
            movieWishlistService
                .unWishListMovie(vm.userId, movieId)
                .then(function (res) {
                    getUserWishlist();
                });
        }

        function logout() {
            userService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                }, function (err) {
                    vm.error = "Problem";
                });
        }

        function getUserWishlist() {
            movieWishlistService
                .getUserWishlist(vm.userId)
                .then(function (value) {
                    console.log(value);
                    if(value.data.length === 0){
                        vm.message = "You have not wishlisted any movies";
                    }
                    vm.wishList = value.data;
                }, function (reason) {
                    vm.error = "Failed to retrieve wishListed movies"
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