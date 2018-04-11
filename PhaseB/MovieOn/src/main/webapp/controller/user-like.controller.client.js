(function () {
    angular
        .module("MovieOn")
        .controller("userLikeController", userLikeController);
    function userLikeController(userService, movieLikeService, $location, loggedIn) {
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
            getUserLikes();
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

        function unlikeMovie(movieId) {
            movieLikeService
                .unlikeMovie(vm.userId, movieId)
                .then(function (res) {
                    getUserLikes();
                });
        }

        function getUserLikes() {
            movieLikeService
                .getUserLike(vm.userId)
                .then(function (value) {
                    if(value.data.length === 0){
                        vm.message = "You have not liked any movies";
                    }
                    vm.likeList = value.data;
                }, function (reason) {
                    vm.error = "Failed to retrieve liked movies"
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