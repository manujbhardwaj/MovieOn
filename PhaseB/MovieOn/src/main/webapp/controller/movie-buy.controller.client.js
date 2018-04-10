
(function () {
    angular
        .module("MovieOn")
        .controller("movieBuyController", movieBuyController);
    function movieBuyController($routeParams, $location, userService, currentUser, movieService) {
        var vm = this;
        vm.movieId = $routeParams['mid'];
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.goBack = goBack;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.buyMovie = buyMovie;
        vm.logout = logout;
        vm.gotoBought = gotoBought;
        vm.contactAdmin = contactAdmin;
        vm.followSeller = followSeller;
        vm.unfollowSeller = unfollowSeller;

        function followSeller(seller, index) {
            movieService
                .favSeller(vm.userId, seller)
                .then(function (res) {
                    vm.sellerList[index].followed = true;
                });
        }

        function unfollowSeller(_id, index) {
            movieService
                .unfavSeller(vm.userId, sellerId)
                .then(function (res) {
                    vm.sellerList[index].followed = false;
                });
        }

        function init() {
            movieService
                .getMovieDetails(vm.movieId)
                .then(function(response){
                    console.log(response.data);
                    if(response.length == 0)
                        vm.message = "No seller is selling this movie";
                    else{
                        movieService
                            .getFavSeller(vm.userId)
                            .then(function(value){
                                console.log(value.data);
                                if(response.data.seller.id)
                            });
                        vm.sellerList = response.data;
                    }

                });
            openNav();
        }
        init();

        function logout() {
            userService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                }, function (err) {
                    vm.error = "Problem";
                });
        }

        function buyMovie(sellerId) {
            UserService
                .buyMovie(userId, sellerId, movieId)
                .then(function (response) {
                    // alert("Seller will contact you with further info");
                    // $location.url('/home');
                });
        }

        function openNav() {
            vm.open = false;
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }

        function contactAdmin() {
            $location.url("/contact");
        }

        function closeNav() {
            vm.open = true;
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        function gotoBought() {
            $('#myModal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $location.url('/bought');
        }

        function goBack() {
            $location.url('/movie/' + movieId);
        }
    }
})();