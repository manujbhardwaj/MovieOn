(function () {
    angular
        .module("MovieOn")
        .factory("addressService", addressService);
    function addressService($http) {
        var api = {
            "addAddress": addAddress

        };
        return api;

        function addAddress(userId, address) {
            return $http.post("/api/address/user/" + userId + "/add/", address);
        }
    }
})();