(function () {
    angular
        .module("MovieOn")
        .controller("sellerReviewController", sellerReviewController);
    function sellerReviewController (userService, sellerReviewService, $location, $routeParams, currentUser) {
        var vm = this;
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.gotoHome = gotoHome;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.getMovieDetails = getMovieDetails;
        vm.logout = logout;
        vm.postSellerReview = postSellerReview;
        vm.contactAdmin = contactAdmin;

        function contactAdmin() {
            $location.url("/contact");
        }

        function init() {
            getSellerReview();
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
            userService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                }, function (err) {
                    vm.error = "Problem";
                });
        }

        function getSellerReview(){
            sellerReviewService
                .getSellerReview (vm.userId)
                .then(function (response) {
                    if(response.data.length === 0)
                        vm.message = "No reviews for you.";
                    vm.sellerReviews = response.data;
                });
        }

        function postSellerReview() {
            sellerReviewService
                .postSellerReview(vm.userId, vm.sellerId, vm.review)
                .then(function (res) {
                    getSellerReview();
                    vm.review = null;
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

        function getMovieDetails(movieId) {
            $location.url('/movie/' + movieId);
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