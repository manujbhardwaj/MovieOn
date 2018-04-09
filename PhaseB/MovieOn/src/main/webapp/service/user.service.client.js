(function () {
    angular
        .module("MovieOn")
        .factory("userService", userService);
    function userService($http) {
        var api = {
            "login": login,
            "register": register,
            "loggedIn": loggedIn,
            "logout": logout
        };
        return api;

        function login(user) {
            console.log(user)
            return $http.post("/api/login", user);
        }
        function loggedIn() {
            return $http.get("/api/loggedIn");
        }
        function logout() {
            return $http.post("/api/logout");
        }
        function register(user) {
            console.log(user);
            return $http.post("/api/register", user);
        }
    }
})();