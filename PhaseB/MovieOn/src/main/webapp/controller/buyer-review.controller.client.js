(function () {
    angular
        .module("MovieOn")
        .controller("buyerReviewController", buyerReviewController);
    function buyerReviewController (userService, sellerReviewService, $location, $routeParams, currentUser) {
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
            getBuyerReview();
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

        function getBuyerReview(){
            sellerReviewService
                .getBuyerReview (vm.userId)
                .then(function (response) {
                    if(response.data.length === 0)
                        vm.message = "No reviews posted by you.";
                    vm.buyerReviews = response.data;
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