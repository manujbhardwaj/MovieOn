(function () {
    angular
        .module("MovieOn")
        .controller("addressController", addressController);
    function addressController(currentUser, userService, addressService, $location, $routeParams) {
        var vm = this;
        vm.addressId = $routeParams['aid'];
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.addAddress = addAddress;

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
            if(vm.addressId !== 'new'){
                console.log(vm.addressId);
                addressService
                    .getAddressById(vm.addressId)
                    .then(function (value) {
                        console.log(value);
                        vm.address = value.data;
                    }, function (reason) {

                    });
            }
        }
        init();

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

        function addAddress(address) {
            addressService
                .addAddress(vm.userId, address)
                .then(function (address) {
                    if (address){
                        vm.message = "Address successfully added";
                        vm.error = null;
                        window.scrollTo(0, 0);
                    }
                    else{
                        vm.error = "Address not added";
                        vm.error = null;
                        window.scrollTo(0, 0);
                    }
                });
        }
    }
})();