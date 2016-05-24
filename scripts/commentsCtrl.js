/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').controller('commentsCtrl', [
    "$scope",
    "$window",
    "DataHandler",
    "TagUtils",
    function($scope, $window, DataHandler, TagUtils){
        $scope.comments = [];
        function createCommentModel(listLength){
            return {
                id:listLength+1,
                title:"",
                text:"",
                newTags: "",
                allTags: $scope.tagsList,
                tags: []
            };
        }
        function createTagsList(commentsData){
            var tags = new Map;
            var tagsList = [];
            for(var i = 0; i<commentsData.length; i++){
                var currentTags = commentsData[i].tags;
                for(var j = 0; j<currentTags.length; j++){
                    if(!tags.has(currentTags[j])){
                        tags.set(currentTags[j],currentTags[j]);
                    }
                }
            }
            tags.forEach(function(value){
                tagsList.push(value);

            });
            return tagsList;
        }

        DataHandler.getAllComments().then(function(response) {
            $scope.comments = response;
            $scope.tagsList = createTagsList($scope.comments);
            $scope.newComment = createCommentModel($scope.comments.length);

        });

        $scope.updateTag = function(tag) {
            var tags = $scope.newComment.tags;

            TagUtils.updateTags(tag, tags);
        };

        $scope.addNewComment = function(){
          if($scope.newComment.title.trim() !="" && $scope.newComment.text.trim() !=""){
              var newTags = $scope.newComment.newTags.trim();
              if (newTags) {
                  TagUtils.addNewTags($scope.newComment.allTags, $scope.newComment.tags, newTags);
              }
              $scope.comments.push(angular.copy($scope.newComment));
              $scope.newComment.title = "";
              $scope.newComment.text = "";
              $scope.newComment.newTags = "";
              $scope.tags = [];
              $scope.newComment.id +=1;
          }
          else{
              $window.alert("Please fill title and text fields!");
          }
        };
        $scope.removeComment = function(index){
            $scope.comments.splice(index,1);
        };
    }
]);