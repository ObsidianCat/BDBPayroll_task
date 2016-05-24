/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').factory('DataHandler', ["$http", "$q","API_URL", function($http, $q, API_URL){
    var DataHandler = {
        // getAll:function (url) {
        //     return $q(function (resolve) {
        //         $http.get(url)
        //             .then(
        //                 function (data) {
        //                     resolve(data);
        //                 },
        //                 function errorCallback() {
        //                     var data = dataMethods.getAll("./data.json");
        //                     resolve(data);
        //                 }
        //             );
        //     });
        // }
    };

    return DataHandler;
}]);