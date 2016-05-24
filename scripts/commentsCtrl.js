/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').controller('commentsCtrl', [
    "$scope",
    "$window",
    "DataHandler",
    function($scope, $window, DataHandler){
        $scope.comments;
        function createCommentModel(listLength){
            return {
                id:listLength+1,
                title:"",
                text:"",
                "tags": ["bug", "issue", "etc"]
            };
        }

        DataHandler.getAllComments().then(function(response) {
            $scope.comments = response;
            $scope.newComment = createCommentModel($scope.comments.length);
        });

        $scope.addNewComment = function(){
          if($scope.newComment.title.trim() !="" && $scope.newComment.text.trim() !=""){
              $scope.comments.push(angular.copy($scope.newComment));
              $scope.newComment.title = "";
              $scope.newComment.text = "";
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