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

           // Resposible for the self-typing script on the main page.
           $(function () {
               var i = 0;
               const MATH  = 0;
               const STATISTICS = 1;
               //const DATA = 2;
               $("#typed-changing").typed({
                   strings: ['matemática^1000', 'estatística^1000', 'analise de dados^1000'],
                   backgrounds: ['#000000', "#ababab", "fbfbfb"],
                   typeSpeed: 45,
                   loop: true,
                   backDelay: 2000,
                   showCursor: false,
                   preStringTyped: function () {
                       i = i === 3 ? MATH : i;

                       var backgroundMath = $("#background-home.math");
                       var backgroundStatistics = $("#background-home.statistics");
                       var backgroundData = $("#background-home.data");
                       if (i === MATH) {
                           backgroundMath.removeClass("transparent");
                           backgroundStatistics.addClass("transparent");
                           backgroundData.addClass("transparent");
                           $('#typed-changing').css("color", "#3F51B5");
                       }
                       else if (i === STATISTICS) {
                           backgroundMath.addClass("transparent");
                           backgroundStatistics.removeClass("transparent");
                           //backgroundData.addClass("transparent");
                           $('#typed-changing').css("color", "lightcoral");
                       }
                       else {
                           //backgroundMath.addClass("transparent");
                           backgroundStatistics.addClass("transparent");
                           backgroundData.removeClass("transparent");
                           $('#typed-changing').css("color", "lightgreen");
                       }
                       i++;
                   }
               });
           });

           this.sendUserEmailToList = function (username, userEmail, userMessage) {
               Meteor.call('addEmail', username, userEmail, userMessage);
               this.username = "";
               this.userEmail = "";
               this.userMessage = "";
           };
       }
   }
});
