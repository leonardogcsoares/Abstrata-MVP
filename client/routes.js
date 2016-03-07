/**
 * Created by leonardogcsoares on 3/7/2016.
 */
angular.module('abstrata').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/' , {
            url: '/',
            template: '<angular-chart></angular-chart>'
        })
        .state('mvp1', {
            url: '/mvp1',
            template: '<mvp-one></mvp-one>'
        });

});