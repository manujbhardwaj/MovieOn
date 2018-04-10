(function () {
    angular
        .module("WebAppMaker")
        .controller("UsersController", usersController);
    function usersController(UserService, $location, loggedIn) {
        var vm = this;
        if(loggedIn){
            var userId = loggedIn._id;
            vm.userId = userId;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.getUserInfo = getUserInfo;
        vm.logout = logout;

        function init() {
            UserService
                .getAllUsers()
                .then(function (users) {
                    if(users.length == 0)
                        vm.message = "No users in database";
                    else{
                        users.sort(compare);
                        vm.users = users;
                    }
                });

            UserService
                .findUserById(userId)
                .then(function (user) {
                    vm.user = user;
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

        function compare(a, b) {
            if (a.username > b.username)
                return 1;
            if (a.username < b.username)
                return -1;
            return 0;
        }

        function getUserInfo(buyerId) {
            $location.url('/order/buyer/'+buyerId);
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