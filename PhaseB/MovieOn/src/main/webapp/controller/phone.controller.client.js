(function () {
    angular
        .module("MovieOn")
        .controller("phoneController", phoneController);
    function phoneController(currentUser, userService, phoneService, $location, $routeParams) {
        var vm = this;
        vm.phoneId = $routeParams['pid'];
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.addPhone= addPhone;

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
            console.log(vm.phoneId);
            if(vm.phoneId !== 'new'){
                phoneService
                    .getPhoneById(vm.phoneId)
                    .then(function (value) {
                        console.log(value);
                        vm.phone = value.data;
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

        function addPhone(phone) {
            phoneService
                .addPhone(vm.userId, phone)
                .then(function (value) {
                        vm.message = "Phone added successfully";
                        vm.error = null;
                        window.scrollTo(0, 0);
                }, function (reason) {
                    vm.error = "Error in adding phone";
                    vm.error = null;
                    window.scrollTo(0, 0);
                });
        }
    }
})();