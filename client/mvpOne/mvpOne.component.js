angular.module('abstrata').directive('mvpOne', function () {
   return {
       restrict: 'E',
       templateUrl: 'client/mvpOne/mvpOne.component.html',
       controllerAs: 'mvpOne',
       controller: function ($document) {

           this.onDownArrowClick = function (scrollElement) {
               $document.scrollToElement(angular.element(document.getElementById(scrollElement)),
                    0, 500);
           };
       }
   }
});