(function () {
    angular
        .module("MovieOn")
        .factory("addressService", addressService);
    function addressService($http) {
        var api = {
            "addAddress": addAddress,
            "getUserAddress": getUserAddress,
            "getAddressById": getAddressById

        };
        return api;

        function addAddress(userId, address) {
            return $http.post("/api/address/user/" + userId + "/add", address);
        }

        function getUserAddress(userId) {
            return $http.get("/api/address/user/" + userId);
        }

        function getAddressById(addressId) {
            return $http.get("/api/address/" + addressId);
        }
    }
})();