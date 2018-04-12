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
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/register", {
                templateUrl: "view/register.view.client.html",
                controller: "registerController",
                controllerAs: "model",
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/profile", {
                templateUrl: "view/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model",
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/home", {
                templateUrl: "view/home.view.client.html",
                controller: "homeController",
                controllerAs: "model",
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/movie/:mid", {
                templateUrl: "view/movie.view.client.html",
                controller: "movieController",
                controllerAs: "model",
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/contactAdmin", {
                templateUrl: "view/contactAdmin.view.client.html",
                controller: "contactAdminController",
                controllerAs: "model",
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/address/:aid", {
                templateUrl: "view/address.view.client.html",
                controller: "addressController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/phone/:pid", {
                templateUrl: "view/phone.view.client.html",
                controller: "phoneController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/movie/:mid/buy", {
                templateUrl: "view/movie-buy.view.client.html",
                controller: "movieBuyController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/users", {
                templateUrl: "view/users.view.client.html",
                controller: "usersController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/userApprove", {
                templateUrl: "view/userApprove.view.client.html",
                controller: "userApproveController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/search/:sid", {
                templateUrl: "view/search.view.client.html",
                controller: "searchController",
                controllerAs: "model",
                resolve: { currentUser: checkCurrentUser}
            })
            .when("/like", {
                templateUrl: "view/user-like.view.client.html",
                controller: "userLikeController",
                controllerAs: "model",
                resolve: { loggedIn: checkLoggedIn }
            })
            .when("/wishlist", {
                templateUrl: "view/user-wishlist.view.client.html",
                controller: "userWishlistController",
                controllerAs: "model",
                resolve: { loggedIn: checkLoggedIn }
            })
            .when("/inventory", {
                templateUrl: "view/user-inventory.view.client.html",
                controller: "inventoryController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/fav", {
                templateUrl: "view/user-fav.view.client.html",
                controller: "userFavController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/bought", {
                templateUrl: "view/user-bought.view.client.html",
                controller: "userBoughtController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .when("/order", {
                templateUrl: "view/user-sold.view.client.html",
                controller: "userSoldController",
                controllerAs: "model",
                resolve: { currentUser: checkLoggedIn}
            })
            .otherwise({redirectTo:"/home"});

        function checkCurrentUser($q, userService, $location) {
            var deferred = $q.defer();
            userService
                .loggedIn()
                .then(function (response) {
                    var user = response.data;
                    if (user.id != 0) {
                        deferred.resolve(user);
                    } else {
                        deferred.resolve(null);
                    }
                }, function (err) {
                    deferred.reject();
                    $location.url('/home');
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
                    } else {
                        deferred.reject();
                        $location.url('/login');
                    }
                }, function (err) {
                    deferred.reject();
                    $location.url('/login');
                });
            return deferred.promise;
        }
    }
})();