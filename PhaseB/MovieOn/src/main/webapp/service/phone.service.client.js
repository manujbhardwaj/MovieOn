(function () {
    angular
        .module("MovieOn")
        .factory("phoneService", phoneService);
    function phoneService($http) {
        var api = {
            "addPhone": addPhone,
            "getUserPhone": getUserPhone,
            "getPhoneById": getPhoneById

        };
        return api;

        function addPhone(userId, phone) {
            return $http.post("/api/phone/user/" + userId + "/add/", phone);
        }

        function getUserPhone(userId) {
            return $http.get("/api/phone/user/" + userId);
        }

        function getPhoneById(phoneId) {
            return $http.get("/api/phone/" + phoneId);
        }
    }
})();