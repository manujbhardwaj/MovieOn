(function () {
    angular
        .module("MovieOn")
        .controller("movieController", movieController);
    function movieController($routeParams, $location, $sce, movieService, userService, currentUser, apiService) {
        var vm = this;
        vm.movieId = $routeParams['mid'];
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.likeMovie = likeMovie;
        vm.unlikeMovie = unlikeMovie;
        vm.doYouTrustUrl = doYouTrustUrl;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.sellMovie = sellMovie;
        vm.wishlistMovie = wishlistMovie;
        vm.unWishlistMovie = unWishlistMovie;
        vm.updateInventory = updateInventory;
        vm.logout = logout;
        vm.gotoSold = gotoSold;

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });

        function init() {
            apiService
                .getMovieDetails(vm.movieId)
                .then(function(response) {
                    response.data.backdrop_path = 'https://image.tmdb.org/t/p/w780'+response.data.backdrop_path;
                    response.data.poster_path = 'https://image.tmdb.org/t/p/w780'+response.data.poster_path;
                    response.data.imdb_id = 'http://www.imdb.com/title/'+response.data.imdb_id;
                    vm.movie = response.data;
                    if(vm.userId){
                        getUserLikedMovies();
                        getUserWishlistMovies();
                        getMovieCount();
                    }
                });
            openNav();

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
                        if(response.data.crew[i].job == 'Director')
                            vm.movieDirector = response.data.crew[i].name;
                    }
                    vm.cast = cast;
                });

            apiService
                .getMovieImages(vm.movieId)
                .then(function(response) {
                    vm.movieImages = response.data;
                });

            apiService
                .getMovieVideos(vm.movieId)
                .then(function(response) {
                    var found = false;
                    for(var i = 0; i < response.data.results.length; i++){
                        if(response.data.results[i].type === 'Trailer'){
                            response.data.results[i].key = 'https://www.youtube.com/embed/'+response.data.results[i].key;
                            vm.movieVideo = response.data.results[i];
                            found = true;
                            break;
                        }
                    }
                    if(!found){
                        response.data.results[0].key = 'https://www.youtube.com/embed/'+response.data.results[0].key;
                        vm.movieVideo = response.data.results[0];
                    }
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

            apiService
                .getMovieReviews(vm.movieId)
                .then(function(response) {
                    if(response.data.results.length == 0)
                        vm.message = "This movie has no reviews.";
                    else
                        vm.movieReviews = response.data.results;
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

        function doYouTrustUrl(url) {
            if(url){
                return $sce.trustAsResourceUrl(url);
            }
        }

        function getUserLikedMovies() {
            movieService
                .hasUserLikedMovie(vm.userId, vm.movieId)
                .then(function (value) {
                    vm.liked = value.data;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function getUserWishlistMovies() {
            movieService
                .hasUserWishlistMovie(vm.userId, vm.movieId)
                .then(function (value) {
                    vm.liked = value.data;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function likeMovie() {
            movieService
                .likeMovie(vm.userId, vm.movie)
                .then(function (res) {
                    vm.likes = res.data;
                    vm.liked = true;
                });
        }

        function unlikeMovie() {
            movieService
                .unlikeMovie(vm.userId, vm.movieId)
                .then(function (res) {
                    vm.likes = res.data;
                    vm.liked = false;
                });
        }

        function wishlistMovie() {
            movieService
                .wishlistMovie(vm.userId, vm.movie)
                .then(function (res) {
                    vm.wishlist = true;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function unWishlistMovie() {
            movieService
                .unwishlistMovie(vm.userId, vm.movieId)
                .then(function (res) {
                    vm.wishlist = false;
                }, function (reason) {
                    console.log(reason);
                });
        }

        function updateInventory(copies) {
            if(copies < 1)
                copies = 0;
            vm.inventory.copies = copies;
            movieService
                .updateInventory(vm.inventory)
                .then(function (response) {
                    // alert("Items added successfully");
                    // $location.url('/home');
                });
        }

        function getMovieCount() {
            movieService
                .getMovieCopies(vm.userId, vm.movieId)
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