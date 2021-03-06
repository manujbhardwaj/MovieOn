(function () {
    angular
        .module("MovieOn")
        .controller("userApproveController", userApproveController);
    function userApproveController($routeParams, NgTableParams, currentUser, $location, userService, adminService) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.approveOrReject = approveOrReject;

        function approveOrReject(seller) {
            adminService
                .approveOrReject(seller)
                .then(function (value) {
                    vm.message = "Request successfully processed."
                }, function (reason) {
                    vm.error = "There was an error. Please contact admin."
                });
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
            adminService
                .findAllSeller()
                .then(function (value) {
                    if(value.data.length == 0) {
                        vm.message = "No Sellers";
                    }
                    var data = value.data;
                    vm.tableParams = new NgTableParams({
                        page: 1,
                        count: 10
                    }, {
                        filterDelay: 0,
                        counts: [],
                        dataset: data
                    });
                }, function (err) {
                    vm.error = err.data.message;
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
    }
})();