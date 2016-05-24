/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').directive('commentItem', function() {
    var controller = [
        '$scope',
        '$sce',
        function ($scope, $sce) {

            $scope.comment.text = $sce.trustAsHtml($scope.comment.text);
            $scope.isViewMode = true;
            $scope.updateCommentData = {
                title:$scope.comment.title,
                text:$scope.comment.text,
                allTags:angular.copy($scope.tags),
                tags:angular.copy($scope.comment.tags)
            };
            
            $scope.toggleEditMode = function(){
                $scope.isViewMode = !$scope.isViewMode;
            };

            $scope.updateTag = function(index, tag) {
                var tags = $scope.updateCommentData.tags;

                if (tags.indexOf(tag) > -1) {
                    tags.splice(index);
                }
                else {
                    tags.push(tag);
                }
            };

            $scope.updateComment = function(){
                $scope.comment.title =  $scope.updateCommentData.title;
                if (typeof $scope.updateCommentData.text === "string") {
                    $scope.updateCommentData.text =   $sce.trustAsHtml($scope.updateCommentData.text);
                }
                $scope.comment.text = $scope.updateCommentData.text;
                $scope.toggleEditMode(true);
            };
    }];

    return {
        replace: true,
        scope: {
            comment: '=',
            tags: '=',
            remove:'&',
            index:'@'
        },
        controller: controller,
        templateUrl: "./views/comment-item.html"
    }
});