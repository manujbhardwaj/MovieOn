(function () {
    angular
        .module("WebAppMaker")
        .controller("userFavController", userFavController);
    function userFavController(userService, movieService, $location, checkLoggedIn) {
        var vm = this;
        if(checkLoggedIn){
            vm.userId = checkLoggedIn.id;
            vm.user = checkLoggedIn;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.unfollowSeller = unfollowSeller;
        vm.contactAdmin = contactAdmin;

        function unfollowSeller(_id, index) {
            UserService
                .unfollowSeller(userId, _id)
                .then(function (res) {
                    vm.sellerList[index].fav = false;
                });
        }

        function contactAdmin() {
            $location.url("/contact");
        }

        function init() {
            userService
                .findUserById(userId)
                .then(function (user) {
                    vm.user = user;
                    if(user.sellersFollowed.length == 0)
                        vm.message = "You have no favorite sellers.";
                    else{
                        for(var i = 0; i < user.sellersFollowed.length; i++){
                            user.sellersFollowed[i].fav = true;
                        }
                        vm.sellerList = user.sellersFollowed;
                    }
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

        function logout() {
            UserService
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