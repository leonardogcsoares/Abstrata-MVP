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

           $(function () {
               $("#typed-changing").typed({
                   strings: ['matemática', 'estatística', 'analise de dados'],
                   typeSpeed: 25,
                   loop: true,
                   backDelay: 2000,
                   showCursor: false,
                   preStringTyped: function () {
                     console.log("Before typing given string");
                   },
                   onStringTyped: function () {
                       // var currentText = $("#typed-changing").text().toString();
                       // var nextBackgroundToLoad = currentText === this.strings[0] ? "url(/media/img/math-background.jpg)" :
                       //      currentText === this.strings[1] ? "url(/media/img/statistics-background.jpg)" : "url(/media/img/data-background.jpg)";
                       // $("#background-home").fadeOut("slow", function () {
                       //     $("#background-home").css("background-image", nextBackgroundToLoad);
                       //     $("#background-home").fadeIn("slow");
                       // });

                   }


               });
           });
           
           
       }
   }
});