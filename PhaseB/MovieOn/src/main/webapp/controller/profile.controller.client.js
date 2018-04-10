(function () {
    angular
        .module("MovieOn")
        .controller("profileController", profileController);
    function profileController(currentUser, userService, $location, $mdDialog) {
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
        vm.showAddressDialog = showAddressDialog;
        vm.showPhoneDialog = showPhoneDialog

        function showAddressDialog ($event) {
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'addressDialogContent.tmpl.html',
                locals:{userId: vm.userId},
                controller: addressDialogController
            });

            function addressDialogController($scope, $mdDialog, addressService, userId) {
                $scope.closeDialog = function ()  {
                    $mdDialog.hide();
                };

                $scope.addAddress = function(address) {
                    addressService
                        .addAddress(userId, address)
                        .then(function (address) {
                            if (address)
                                vm.message = "Address successfully added";
                            else
                                vm.error = "Address not added";
                        });
                    $scope.closeDialog();
                }
            }
        }


        function showPhoneDialog ($event) {
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'phoneDialogContent.tmpl.html',
                locals:{userId: vm.userId},
                controller: phoneDialogController
            });

            function phoneDialogController($scope, $mdDialog, phoneService, userId) {
                $scope.closeDialog = function ()  {
                    $mdDialog.hide();
                };

                $scope.addPhone = function(phone) {
                    phoneService
                        .addPhone(userId, phone)
                        .then(function (phone) {
                            if (phone)
                                vm.message = "Phone successfully added";
                            else
                                vm.error = "Phone not added";
                        });
                    $scope.closeDialog();
                }
            }
        }

        function logout() {
            userService.logout()
                .then(function (value) {
                    $location.url("/login");
                }, function (reason) {
                    vm.error = "There was a prob logging out. Please contact admin.";
                });
        }

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