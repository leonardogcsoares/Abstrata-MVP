angular.module('abstrata').directive('productPage', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/productPage/productPage.component.html',
        controllerAs: 'productPage',
        controller: function ($document) {

            this.sendUserEmailToList = function (username, userEmail, userMessage) {
                Meteor.call('addEmail', username, userEmail, userMessage);
                this.username = "";
                this.userEmail = "";
            };
        }
    }
});
