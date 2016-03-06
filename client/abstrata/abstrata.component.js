angular.module('abstrata').directive('abstrata', function () {
   return {
       restrict: 'E',
       scope: {
           chartData: '='
       },
       templateUrl: 'client/abstrata/abstrata.component.html',
       controllerAs: 'abstrata',
       controller: function ($scope) {

           /** So far I have retrieved the first 100 data instances from the Minidolar JSON file**/



           ///////////////////////////


       }
   }
});