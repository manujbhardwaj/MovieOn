(function () {
    angular
        .module("MovieOn")
        .factory("adminService", adminService);
    function adminService($http) {
        var api = {
            "contactAdmin": contactAdmin
        };
        return api;

        function contactAdmin(userId, note) {
            return $http.post("/api/contactAdmin/"+userId, note);
        }
    }
})();