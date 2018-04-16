(function () {
    angular
        .module("MovieOn")
        .controller("userEditController", userEditController);
    function userEditController($routeParams, NgTableParams, currentUser, $location, userService, adminService, $uibModal) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;
        vm.deleteUser = deleteUser;

        function deleteUser(id) {

            console.log(id);

            var message = "Are you sure you want to remove?";

            var modalHtml = '<div class="modal-body">' + message + '</div>';
            modalHtml += '<div class="modal-footer"><button class="btn btn-primary btn-md" ng-click="ok()">Remove</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>';

            var modalInstance = $uibModal.open({
                template: modalHtml,
                controller: ModalInstanceCtrl
            });

            modalInstance.result.then(function() {
                console.log(id);
                adminService
                    .deleteUser(id)
                    .then(function (value) {
                        console.log(value);
                        if(value.data.length == 0) {
                            vm.message = "No Users";
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
                        console.log(err);
                        vm.error = err.data.message;
                    });
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
                .getAllUsers()
                .then(function (value) {
                    if(value.data.length == 0) {
                        vm.message = "No Users";
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

    var ModalInstanceCtrl = function($scope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    };
})();