(function () {
    angular
        .module("MovieOn")
        .config(configuration);
    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "view/login.view.client.html",
                controller: "loginController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/register", {
                templateUrl: "view/register.view.client.html",
                controller: "registerController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/profile", {
                templateUrl: "view/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/home", {
                templateUrl: "view/home.view.client.html",
                controller: "homeController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/movie/:mid", {
                templateUrl: "view/movie.view.client.html",
                controller: "movieController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/movie/:mid/buy", {
                templateUrl: "view/movie-buy.view.client.html",
                controller: "movieBuyController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/userApprove", {
                templateUrl: "view/userApprove.view.client.html",
                controller: "userApproveController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/search/:sid", {
                templateUrl: "view/search.view.client.html",
                controller: "searchController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .when("/inventory", {
                templateUrl: "view/user-inventory.view.client.html",
                controller: "inventoryController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .otherwise({redirectTo:"/login"});

        function loggedIn($q, userService, $location) {
            var deferred = $q.defer();
            userService
                .loggedIn()
                .then(function (response) {
                    var user = response.data;
                    if (user.id != 0) {
                        deferred.resolve(user);
                    } else {
                        deferred.resolve(null);
                        $location.url('/login');
                    }
                }, function (err) {
                    deferred.reject();
                    $location.url('/login');
                });
            return deferred.promise;
        }

        function checkLoggedIn($q, userService, $location) {
            var deferred = $q.defer();
            userService
                .loggedIn()
                .then(function (response) {
                    var user = response.data;
                    if (user.id != 0) {
                        deferred.resolve(user);
                        $location.url('/profile');
                    } else {
                        deferred.resolve(null);
                    }
                }, function (err) {
                    deferred.reject();
                    $location.url('/login');
                });
            return deferred.promise;
        }
    }
})();