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
            "findAllSeller": findAllSeller,
            "approveOrReject": approveOrReject,
            "updateUser": updateUser,
            "getAllUsers": getAllUsers
        };
        return api;

        function login(user) {
            return $http.post("/api/login", user);
        }
        function approveOrReject(seller) {
            return $http.put("/api/seller/approve", seller);
        }
        function findAllSeller() {
            return $http.get("/api/seller");
        }
        function loggedIn() {
            return $http.get("/api/loggedIn");
        }
        function logout() {
            return $http.post("/api/logout");
        }
        function register(user) {
            return $http.post("/api/register", user);
        }
        function updateUser(user) {
            return $http.post("/api/update", user);
        }
        function getAllUsers() {
            return $http.get("/api/user");
        }
    }
})();