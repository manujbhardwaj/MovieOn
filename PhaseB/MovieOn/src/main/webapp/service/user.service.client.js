(function () {
    angular
        .module("MovieOn")
        .factory("userService", userService);
    function userService($http) {
        var api = {
            "login": login
        };
        return api;

        function login(user) {
            console.log(user)
            return $http.post("/api/login", user);
        }
    }
})();