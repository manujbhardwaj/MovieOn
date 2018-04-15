(function () {
    angular
        .module("MovieOn")
        .controller("profileController", profileController);
    function profileController(currentUser, userService, addressService, $location, phoneService) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.update = update;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.updateAddress = updateAddress;
        vm.updatePhone = updatePhone;

        function init() {
            openNav();
            $(window).width(function() {
                if ($(this).width() <= 768) {
                    closeNav();
                }
                else{
                    openNav();
                }
            });
            addressService
                .getUserAddress(vm.userId)
                .then(function (value) {
                    vm.addresses = value.data;
                }, function (reason) {
                });

            phoneService
                .getUserPhone(vm.userId)
                .then(function (value) {
                    vm.phones = value.data;
                }, function (reason) {
                });
        }
        init();

        function updateAddress(addressId) {
            $location.url("/address/" + addressId);
        }

        function updatePhone(phoneId) {
            $location.url("/phone/" + phoneId);
        }

        function logout() {
            userService.logout()
                .then(function (value) {
                    $location.url("/login");
                }, function (reason) {
                    vm.error = "There was a prob logging out. Please contact admin.";
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

        function update(user) {
            if(user.email == null) {
                vm.error = "Email not correct";
                window.scrollTo(0, 0);
                return;
            }
            if((user.passwrd || user.verifyPasswrd) && user.passwrd !== user.verifyPasswrd){
                vm.error = "Password don't match";
                vm.message = null;
                window.scrollTo(0, 0);
                return;
            }
            userService.updateUser(user)
                .then(function (usr) {
                    if(usr){
                        vm.message = "Profile successfully updated";
                        vm.error = null;
                        window.scrollTo(0, 0);
                    }
                    else{
                        vm.error = "Unable to update Profile";
                        vm.message = null;
                    }
                });
        }
    }
})();