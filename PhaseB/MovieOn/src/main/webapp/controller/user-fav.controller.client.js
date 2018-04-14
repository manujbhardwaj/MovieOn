(function () {
    angular
        .module("MovieOn")
        .controller("userFavController", userFavController);
    function userFavController(userService, movieService, favSellerService, $location, currentUser) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.unfollowSeller = unfollowSeller;
        vm.contactAdmin = contactAdmin;


        function init() {
            getFavSeller();
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

        function getFavSeller() {
            favSellerService
                .getFavSeller(vm.userId)
                .then(function (value) {
                    if(value.data.length === 0){
                        vm.message = "You have no favorite sellers.";
                    }
                    vm.sellerList = value.data;
                }, function (reason) {
                    vm.error = "Failed to retrieve favourite sellers."
                });
        }

        function unfollowSeller(sellerId) {
            favSellerService
                .unfavSeller(vm.userId, sellerId)
                .then(function (res) {
                    getFavSeller();
                });
        }

        function contactAdmin() {
            $location.url("/contact");
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