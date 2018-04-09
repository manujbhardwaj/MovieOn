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
                resolve: { currentUser: loggedIn}
            })
            .when("/profile", {
                templateUrl: "view/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model",
                resolve: { currentUser: loggedIn}
            })
            .otherwise({redirectTo:"/login"});

        function loggedIn($q, userService, $location) {
            console.log("manuj");
            var deferred = $q.defer();
            userService
                .loggedIn()
                .then(function (response) {
                    console.log(response);
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