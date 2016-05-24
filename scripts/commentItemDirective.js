/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').directive('commentItem', function() {
    var controller = [
        '$scope',
        function ($scope) {
            $scope.isViewMode = true;
            $scope.updateCommentData = {
                title:$scope.comment.title,
                text:$scope.comment.text
            };
            
            $scope.toggleEditMode = function(isVisible){
                if($scope.isViewMode != isVisible){
                    $scope.isViewMode = isVisible;
                }

            };

            $scope.updateComment = function(){
                $scope.comment.title =  $scope.updateCommentData.title;
                $scope.comment.text =  $scope.updateCommentData.text;
                $scope.toggleEditMode();
            };
    }];

    return {
        replace: true,
        scope: {
            comment: '=',
            remove:'&',
            index:'@'
        },
        controller: controller,
        templateUrl: "./views/comment-item.html"
    }
});