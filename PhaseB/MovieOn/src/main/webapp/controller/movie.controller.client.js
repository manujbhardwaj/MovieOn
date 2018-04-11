(function () {
    angular
        .module("MovieOn")
        .controller("movieController", movieController);
    function movieController($routeParams, $location, $sce, movieService, movieLikeService, movieWishlistService,
                             userService, currentUser, apiService) {
        var vm = this;
        vm.movieId = $routeParams['mid'];
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.likeMovie = likeMovie;
        vm.unlikeMovie = unlikeMovie;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.sellMovie = sellMovie;
        vm.wishlistMovie = wishlistMovie;
        vm.unWishlistMovie = unWishlistMovie;
        vm.updateInventoryForMovie = updateInventoryForMovie;
        vm.logout = logout;
        vm.gotoSold = gotoSold;

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });

        function init() {
            if(vm.user && vm.user.type === 'Buyer'){
                hasUserLikedMovie();
                hasUserWishlistMovie();
            }
            if(vm.user && vm.user.type === 'Seller'){
                getInventoryForMovie();
            }
            apiService
                .getMovieDetails(vm.movieId)
                .then(function(response) {
                    response.data.backdrop_path = 'https://image.tmdb.org/t/p/w780'+response.data.backdrop_path;
                    response.data.poster_path = 'https://image.tmdb.org/t/p/w780'+response.data.poster_path;
                    vm.movie = response.data;
                });
            apiService
                .getMovieCredits(vm.movieId)
                .then(function(response) {
                    for(var i = 0; i < response.data.cast.length; i++){
                        if(response.data.cast[i].profile_path === null){
                            response.data.cast.splice(i--, 1);
                        }
                        else{
                            response.data.cast[i].profile_path = 'https://image.tmdb.org/t/p/w780'+response.data.cast[i].profile_path;
                        }
                    }
                    vm.fullCast = response.data.cast;
                    var cast = [];
                    for(var i = 0; i < 5; i++){
                        cast.push(response.data.cast[i]);
                    }
                    for(var i = 0; i < response.data.crew.length; i++){
                        if(response.data.crew[i].job === 'Director')
                            vm.movieDirector = response.data.crew[i].name;
                    }
                    vm.cast = cast;
                });
            apiService
                .getSimilarMovies(vm.movieId)
                .then(function(response) {
                    for(var i = 0; i < response.data.results.length; i++){
                        if(response.data.results[i].backdrop_path === null){
                            response.data.results.splice(i--, 1);
                        }
                        else{
                            response.data.results[i].backdrop_path = 'https://image.tmdb.org/t/p/w780'+response.data.results[i].backdrop_path;
                        }
                    }
                    vm.similarMovies = response.data.results;
                });
            openNav();
        }
        init();

        function hasUserLikedMovie() {
            movieLikeService
                .hasUserLikedMovie(vm.userId, vm.movieId)
                .then(function (value) {
                    vm.liked = value.data;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function hasUserWishlistMovie() {
            movieWishlistService
                .hasUserWishlistMovie(vm.userId, vm.movieId)
                .then(function (value) {
                    vm.wishlist = value.data;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function likeMovie() {
            movieLikeService
                .likeMovie(vm.userId, vm.movie)
                .then(function (res) {
                    vm.likes = res.data;
                    vm.liked = true;
                });
        }

        function unlikeMovie() {
            movieLikeService
                .unlikeMovie(vm.userId, vm.movieId)
                .then(function (res) {
                    vm.likes = res.data;
                    vm.liked = false;
                });
        }

        function wishlistMovie() {
            movieWishlistService
                .wishlistMovie(vm.userId, vm.movie)
                .then(function (res) {
                    vm.wishlist = true;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function unWishlistMovie() {
            movieWishlistService
                .unwishlistMovie(vm.userId, vm.movieId)
                .then(function (res) {
                    vm.wishlist = false;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function logout() {
            userService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                }, function (err) {
                    vm.error = "Problem";
                });
        }

        function openNav() {
            vm.open = false;
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }

        function closeNav() {
            vm.open = true;
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        function sellMovie(copies) {
            if(copies < 1)
                copies = 0;
            movieService
                .sellMovie(vm.userId, vm.movie, copies)
                .then(function (response) {
                    // alert("Items added successfully");
                    // $location.url('/home');
                });
        }

        function updateInventoryForMovie(copies) {
            if(copies < 1)
                copies = 0;
            vm.inventory.copies = copies;
            movieService
                .updateInventoryForMovie(vm.inventory)
                .then(function (response) {
                    // alert("Items added successfully");
                    // $location.url('/home');
                });
        }

        function getInventoryForMovie () {
            movieService
                .getInventoryForMovie (vm.userId, vm.movieId)
                .then(function (response) {
                    vm.inventory = response.data;
                });
        }

        function gotoSold() {
            $('#myModal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $location.url('/inventory');
        }
    }
})();