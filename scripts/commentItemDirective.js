/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').directive('commentItem', function() {
    var controller = [
        '$scope',
        '$sce',
        'TagUtils',
        function ($scope, $sce, TagUtils) {

            $scope.comment.text = $sce.trustAsHtml($scope.comment.text);
            $scope.isViewMode = true;
            $scope.updateCommentData = {
                title:$scope.comment.title,
                text:$scope.comment.text,
                allTags:$scope.tags,
                newTags:"",
                tags:angular.copy($scope.comment.tags)
            };
            
            $scope.toggleEditMode = function(){
                $scope.isViewMode = !$scope.isViewMode;
            };

            $scope.updateTag = function(index, tag) {
                var tags = $scope.updateCommentData.tags;

                TagUtils.updateTags(tag, tags);
              
            };

          

            $scope.updateComment = function(){
                $scope.comment.title =  $scope.updateCommentData.title;
                $scope.comment.tags =  $scope.updateCommentData.tags;

                if (typeof $scope.updateCommentData.text === "string") {
                    $scope.updateCommentData.text =   $sce.trustAsHtml($scope.updateCommentData.text);
                }
                $scope.comment.text = $scope.updateCommentData.text;

                var newTags = $scope.updateCommentData.newTags.trim();
                if (newTags) {
                    TagUtils.addNewTags($scope.tags, $scope.comment.tags, newTags)
                }
                $scope.updateCommentData.newTags = "";
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