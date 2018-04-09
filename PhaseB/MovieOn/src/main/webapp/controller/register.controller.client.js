(function () {
    angular
        .module("MovieOn")
        .controller("registerController", registerController);
    function registerController(userService, $location) {
        var vm = this;
        vm.isDisabled = false;

        /*event handlers*/
        vm.register = register;
        vm.openNav = openNav;
        vm.closeNav = closeNav;

        function init() {
            $(window).width(function() {
                if ($(this).width() <= 768) {
                    closeNav();
                }
                else{
                    openNav();
                }
            });
            closeNav();
        }
        init();

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

        function register(user) {
            if(!user || !user.type){
                vm.error = "Select user type";
                window.scrollTo(0, 0);
                return;
            }
            if(user.email == null) {
                vm.error = "Email not correct";
                window.scrollTo(0, 0);
                return;
            }
            if(user.passwrd != user.verifyPasswrd) {
                vm.error = "Password Mismatch";
                window.scrollTo(0, 0);
                return;
            }
            if(!user.username || !user.passwrd || !user.verifyPasswrd) {
                vm.error = "Please enter all the required(*) fields";
                window.scrollTo(0, 0);
            }
            createUser(user);
        }

        function createUser(user) {
            vm.isDisabled = true;
            userService
                .register(user)
                .then(function(response) {
                    $location.url("/profile");
                    vm.isDisabled = false;
                }, function (reason) {
                    vm.error = reason.data.message;
                    vm.isDisabled = false;
                });
        }
    }
})();