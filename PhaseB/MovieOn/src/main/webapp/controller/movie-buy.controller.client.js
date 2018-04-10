
(function () {
    angular
        .module("WebAppMaker")
        .controller("MovieBuyController", movieBuyController);
    function movieBuyController($routeParams, $location, UserService, InventoryService, currentUser) {
        var vm = this;
        var movieId = $routeParams['mid'];
        if(currentUser){
            var userId = currentUser._id;
            vm.userId = userId;
        }
        vm.open = true;

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.goBack = goBack;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.buyMovie = buyMovie;
        vm.logout = logout;
        vm.gotoBought = gotoBought;
        vm.contactAdmin = contactAdmin;
        vm.followSeller = followSeller;
        vm.unfollowSeller = unfollowSeller;

        function followSeller(_id, index) {
            UserService
                .followSeller(userId, _id)
                .then(function (res) {
                    vm.sellerList[index].followed = true;
                });
        }

        function unfollowSeller(_id, index) {
            console.log(_id);
            UserService
                .unfollowSeller(userId, _id)
                .then(function (res) {
                    vm.sellerList[index].followed = false;
                });
        }

        function init() {
            InventoryService
                .getMovieDetails(movieId)
                .then(function(response){
                    if(response.length == 0)
                        vm.message = "No seller is selling this movie";
                    else
                        getSellerInfo(response.userSell);
                });

            UserService
                .findUserById(userId)
                .then(function (user) {
                    vm.user = user;
                });
        }
        init();

        function logout() {
            UserService
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

        function getSellerInfo(sellers) {
            UserService
                .findUserSelling(movieId, sellers)
                .then(function (sellerList) {
                    if(sellerList.length === 0)
                        vm.message = "No seller is selling this movie";
                    else {
                        for (var i = 0; i < sellerList.length; i++) {
                            var found = false;
                            for (var j = 0; j < vm.user.sellersFollowed.length; j++) {
                                if (sellerList[i]._id === vm.user.sellersFollowed[j]._id) {
                                    sellerList[i].followed = true;
                                    found = true;
                                    break;
                                }
                            }
                            if (!found)
                                sellerList[i].followed = false;
                        }
                        vm.sellerList = sellerList;
                    }
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

        function gotoHome() {
            $location.url('/home');
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