(function () {
    angular
        .module("MovieOn")
        .factory("addressService", addressService);
    function addressService($http) {
        var api = {
            "addAddress": addAddress,
            "getUserAddress": getUserAddress,
            "getAddressById": getAddressById,
            "updateAddress": updateAddress

        };
        return api;

        function addAddress(userId, address) {
            return $http.post("/api/address/user/" + userId + "/add", address);
        }

        function updateAddress(address) {
            return $http.post("/api/address/update", address);
        }

        function getUserAddress(userId) {
            return $http.get("/api/address/user/" + userId);
        }

        function getAddressById(addressId) {
            return $http.get("/api/address/" + addressId);
        }
    }
})();