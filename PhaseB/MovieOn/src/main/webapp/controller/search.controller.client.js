(function () {
    angular
        .module("MovieOn")
        .controller("searchController", searchController);
    function searchController($routeParams, $location, movieService, userService, currentUser) {
        var vm = this;
        vm.searchTerm = $routeParams['sid'];
        if(currentUser){
            vm.userId = currentUser.id;
            vm.user = currentUser;
        }

        /*event handlers*/
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.logout = logout;

        function init() {
            movieService
                .searchTitle(vm.searchTerm)
                .then(function (response) {
                    if(response.data.results.length === 0)
                        vm.error = "No such movie present in our database. Please refine your search.";
                    for(var i = 0; i < response.data.results.length; i++){
                        if(response.data.results[i].backdrop_path === null){
                            response.data.results.splice(i--, 1);
                        }
                        else{
                            response.data.results[i].backdrop_path = 'https://image.tmdb.org/t/p/w780'+response.data.results[i].backdrop_path;
                        }
                    }
                    vm.movies = response.data.results;
                });
            openNav();
        }
        init();

        function logout() {
            userService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                }, function (err) {
                    vm.error = "There was problem in logging out. Please contact admin.";
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