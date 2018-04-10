(function () {
    angular
        .module("MovieOn")
        .factory("phoneService", phoneService);
    function phoneService($http) {
        var api = {
            "addPhone": addPhone

        };
        return api;

        function addPhone(userId, phone) {
            return $http.post("/api/phone/user/" + userId + "/add/", phone);
        }
    }
})();