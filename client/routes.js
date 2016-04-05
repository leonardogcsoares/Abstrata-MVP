/**
 * Created by leonardogcsoares on 3/7/2016.
 */
angular.module('abstrata').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            template: '<mvp-one></mvp-one>'
        })
        .state('/beta', {
            url: '/beta',
            template: '<product-page></product-page>'
        })
        .state('/chart' , {
            url: '/chart',
            template: '<angular-chart></angular-chart>'
        });

});