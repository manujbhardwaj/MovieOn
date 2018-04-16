(function () {
    angular
        .module("MovieOn")
        .factory("adminService", adminService);
    function adminService($http) {
        var api = {
            "contactAdmin": contactAdmin,
            "approveOrReject": approveOrReject,
            "findAllSeller": findAllSeller,
            "getAllUsers": getAllUsers,
            "deleteUser": deleteUser,
            "getAllNote": getAllNote,
            "deleteNote": deleteNote
        };
        return api;

        function contactAdmin(userId, note) {
            return $http.post("/api/admin/user/"+userId+"/contact", note);
        }

        function approveOrReject(seller) {
            return $http.put("/api/admin/approve/seller", seller);
        }

        function findAllSeller() {
            return $http.get("/api/admin/seller");
        }

        function getAllUsers() {
            return $http.get("/api/admin/user");
        }

        function getAllNote() {
            return $http.get("/api/admin/note");
        }

        function deleteUser(userId) {
            return $http.delete("/api/admin/user/" + userId);
        }

        function deleteNote(noteId) {
            return $http.delete("/api/admin/note/" + noteId);
        }
    }
})();