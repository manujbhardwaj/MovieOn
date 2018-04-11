(function () {
    angular
        .module("MovieOn")
        .factory("userService", userService);
    function userService($http) {
        var api = {
            "login": login,
            "register": register,
            "loggedIn": loggedIn,
            "logout": logout,
            "updateUser": updateUser
        };
        return api;

        function login(user) {
            return $http.post("/api/user/login", user);
        }
        function loggedIn() {
            return $http.get("/api/user/loggedIn");
        }
        function logout() {
            return $http.post("/api/user/logout");
        }
        function register(user) {
            return $http.post("/api/user/register", user);
        }
        function updateUser(user) {
            return $http.post("/api/user/update", user);
        }
    }
})();