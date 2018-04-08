(function () {
    angular
        .module("MovieOn")
        .config(configuration);
    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "view/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .otherwise({redirectTo:"/login"})
    }
})();