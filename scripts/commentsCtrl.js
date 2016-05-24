/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').controller('commentsCtrl', [
    "$scope",
    "DataHandler",
    function($scope, DataHandler){
        $scope.test = "hello!";
        $scope.comments;
        DataHandler.getAllComments().then(function(response) {
            $scope.comments = response;
        });

        $scope.removeComment = function(index){
            $scope.comments.splice(index,1);
        };
    }
]);