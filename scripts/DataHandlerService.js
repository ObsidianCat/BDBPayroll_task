/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').factory('DataHandler', [
    "$http",
    "$q",
    "API_URL",
    "$resource",
    function($http, $q, API_URL,$resource){
        var CommentsRes =  $resource('./data/mock.json/:mock_params');
        var dataMethods = {
            getAllComments: function(){
                return CommentsRes.query().$promise
            }
        };
        
        return dataMethods;
}]);