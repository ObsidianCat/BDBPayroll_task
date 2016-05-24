/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').directive('commentItem', function() {
    var controller = [
        '$scope',
        function ($scope) {
            $scope.isViewMode = true;
            $scope.toggleEditMode = function(){
                $scope.isViewMode = !$scope.isViewMode;
            };

            $scope.updateComment = function(){
                $scope.comment.title =  $scope.newComment.title;
                $scope.comment.text =  $scope.newComment.text;
                $scope.toggleEditMode();
            };

            $scope.newComment = {
                title:$scope.comment.title,
                text:$scope.comment.text
            };
    }];

    return {
        replace: true,
        scope: {
            comment: '=',
            action:'&',
            index:'@'
        },
        controller: controller,
        templateUrl: "./views/comment-item.html"
    }
});