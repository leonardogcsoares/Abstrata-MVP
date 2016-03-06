//angular.module('abstrata', [
//    'angular-meteor',
//    'ngMaterial',
//    'nvd3'
//]);
//
//angular.module('abstrata').controller('abstrataController', function ($scope) {
//
//    $scope.chart = {
//        data: [],
//        options: {}
//    };
//
//    var chartData = [
//        {"contractVolume": "71", "openingPrice": "1839.5", "closingPrice": "1839", "maxPrice": "1840", "dateOfPrice": "2012.04.13 10:10:00", "minPrice": "1838.5"},
//        {"contractVolume": "29", "openingPrice": "1838.5", "closingPrice": "1838", "maxPrice": "1839", "dateOfPrice": "2012.04.13 10:20:00", "minPrice": "1837.5"},
//        {"contractVolume": "398", "openingPrice": "1837.5", "closingPrice": "1839.5", "maxPrice": "1841", "dateOfPrice": "2012.04.13 10:30:00", "minPrice": "1837.5"},
//        {"contractVolume": "94", "openingPrice": "1840.5", "closingPrice": "1839", "maxPrice": "1840.5", "dateOfPrice": "2012.04.13 10:40:00", "minPrice": "1839"},
//        {"contractVolume": "162", "openingPrice": "1839.5", "closingPrice": "1840.5", "maxPrice": "1841", "dateOfPrice": "2012.04.13 10:50:00", "minPrice": "1839.5"},
//        {"contractVolume": "449", "openingPrice": "1841", "closingPrice": "1841", "maxPrice": "1842", "dateOfPrice": "2012.04.13 11:00:00", "minPrice": "1840"},
//        {"contractVolume": "335", "openingPrice": "1841", "closingPrice": "1841.5", "maxPrice": "1841.5", "dateOfPrice": "2012.04.13 11:10:00", "minPrice": "1840"},
//        {"contractVolume": "384", "openingPrice": "1841.5", "closingPrice": "1842.5", "maxPrice": "1845", "dateOfPrice": "2012.04.13 11:20:00", "minPrice": "1841.5"},
//        {"contractVolume": "592", "openingPrice": "1843.5", "closingPrice": "1845.5", "maxPrice": "1847", "dateOfPrice": "2012.04.13 11:30:00", "minPrice": "1843.5"}
//    ];
//
//    $scope.chart.options = {
//        chart: {
//            type: 'discreteBarChart',
//            height: 450,
//            margin : {
//                top: 20,
//                right: 20,
//                bottom: 50,
//                left: 55
//            },
//            x: function(d){return d.label;},
//            y: function(d){return d.dataValue/1000;},
//            showValues: true,
//            duration: 500,
//            xAxis: {
//                axisLabel: 'X Axis'
//            },
//            yAxis: {
//                axisLabel: 'Y Axis',
//                axisLabelDistance: -10
//            }
//        }
//    };
//
//    var openingPrices = [];
//    chartData.forEach(function (object) {
//        openingPrices.push({"dataValue": parseInt(object.openingPrice), "label": object.dateOfPrice});
//    });
//
//    $scope.chart.data = {
//        key: "Opening Prices",
//        values: openingPrices
//    };
//
//    console.log(openingPrices[0].label);
//    console.log(typeof openingPrices[0].dataValue);
//
//    $scope.chart.data = [
//        {
//            key: "Cumulative Return",
//            values: [
//                {
//                    "label" : openingPrices[0].label ,
//                    "value" : openingPrices[0].dataValue
//                } ,
//                {
//                    "label" : openingPrices[1].label ,
//                    "value" : openingPrices[1].dataValue
//                } ,
//                {
//                    "label" : openingPrices[2].label ,
//                    "value" : openingPrices[2].dataValue
//                } ,
//                {
//                    "label" : openingPrices[3].label ,
//                    "value" : openingPrices[3].dataValue
//                }
//                //{
//                //    "label" : openingPrices[4].label ,
//                //    "value" : openingPrices[4].dataValue
//                //} ,
//                //{
//                //    "label" : openingPrices[5].label ,
//                //    "value" : openingPrices[5].dataValue
//                //} ,
//                //{
//                //    "label" : openingPrices[6].label ,
//                //    "value" : openingPrices[6].dataValue
//                //} ,
//                //{
//                //    "label" : openingPrices[7].label ,
//                //    "value" : openingPrices[7].dataValue
//                //}
//            ]
//        }
//    ]
//});