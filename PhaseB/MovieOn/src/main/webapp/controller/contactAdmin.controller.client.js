(function () {
    angular
        .module("MovieOn")
        .controller("contactAdminController", contactAdminController);
    function contactAdminController($routeParams, adminService, currentUser, $location, userService) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.contactAdmin = contactAdmin;
        vm.logout = logout;

        $(window).resize(function() {
            if ($(this).width() <= 768) {
                closeNav();
            }
            else{
                openNav();
            }
        });

        function logout() {
            userService.logout()
                .then(function (value) {
                    $location.url("/home");
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

        function contactAdmin(note) {
            if(!note || !note.email) {
                vm.error = "Email not correct";
                window.scrollTo(0, 0);
                return;
            }
            if(note.email == null) {
                vm.error = "Email not correct";
                window.scrollTo(0, 0);
                return;
            }
            if(!note.firstName || !note.lastName) {
                vm.error = "First Name and Last Name are required.";
                window.scrollTo(0, 0);
                return;
            }
            if(!note.description) {
                vm.error = "Please describe your issue.";
                window.scrollTo(0, 0);
                return;
            }
            if(!vm.userId){
                vm.userId=0;
            }
            adminService.contactAdmin(vm.userId, note)
                .then(function (res) {
                    if(res){
                        vm.message = "Message sent. Admin will contact you soon.";
                        vm.error = null;
                        window.scrollTo(0, 0);
                    }
                    else{
                        vm.error = "There was some error. Please try again.";
                        vm.message = null;
                    }
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
    }
})();