
(function () {
    angular
        .module("MovieOn")
        .controller("movieBuyController", movieBuyController);
    function movieBuyController($routeParams, $location, userService, currentUser, movieService, favSellerService) {
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
            favSellerService
                .favSeller(vm.userId, seller)
                .then(function (res) {
                    vm.sellerList[index].followed = true;
                });
        }

        function unfollowSeller(sellerId, index) {
            favSellerService
                .unfavSeller(vm.userId, sellerId)
                .then(function (res) {
                    vm.sellerList[index].followed = false;
                });
        }

        function init() {
            movieService
                .getAllSellerForMovie(vm.movieId)
                .then(function(response){
                    if(response.data.length === 0)
                        vm.message = "No seller is selling this movie";
                    else{
                        favSellerService
                            .getFavSeller(vm.userId)
                            .then(function(value){
                                for (var i = 0; i < response.data.length; i++) {
                                    var found = false;
                                    for (var j = 0; j < value.data.length; j++) {
                                        if (response.data[i].seller.id === value.data[j].seller.id) {
                                            response.data[i].followed = true;
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found)
                                        response.data[i].followed = false;
                                }
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
            movieService
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