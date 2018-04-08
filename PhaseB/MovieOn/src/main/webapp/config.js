(function () {
    angular
        .module("MovieOn")
        .config(configuration)
    function configuration($routeProvider) {
        $routeProvider
            .when("login", {
                template: "view/login.view.client.js",
                controller: "loginController",
                controllerAs: model
            })
            .when("register", {
                template: "view/register.view.client.js",
                controller: "registerController",
                controllerAs: model
            })
            .when("profile", {
                template: "view/profile.view.client.js",
                controller: "profileController",
                controllerAs: model
            })
            .otherwise({redirectTo:"login"})
    }
})();