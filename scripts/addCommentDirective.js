/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').directive('addComment', function() {
    return {
        replace:true,
        templateUrl: "./views/add-comment.html"
    };
});