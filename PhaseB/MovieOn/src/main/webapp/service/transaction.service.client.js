(function () {
    angular
        .module("MovieOn")
        .factory("transactionService", transactionService);
    function transactionService ($http) {
        var api = {
            "getBought": getBought,
            "getSold": getSold
        };
        return api;

        function getBought(userId) {
            return $http.get("api/transaction/user/" + userId + "/bought");
        }

        function getSold(userId) {
            return $http.get("api/transaction/user/" + userId + "/sold");
        }
    }
})();