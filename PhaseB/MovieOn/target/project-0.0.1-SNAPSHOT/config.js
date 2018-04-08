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
            .otherwise({redirectTo:"login"})
    }
})();