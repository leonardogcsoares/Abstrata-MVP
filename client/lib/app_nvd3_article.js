//angular.module('abstrata', [
//    'angular-meteor',
//    'ngMaterial'
//]);
//
//angular.module('abstrata').controller('abstrataController', function ($scope) {
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
//    var openingPrices = [];
//    var closingPrices = [];
//    var i = 0;
//    chartData.forEach(function (instance) {
//        var instanceArray = {y: parseFloat(instance.openingPrice), x: i};
//        openingPrices.push(instanceArray);
//
//        instanceArray = null;
//        instanceArray = {y: parseFloat(instance.closingPrice), x: i++};
//        closingPrices.push(instanceArray);
//    });
//
//    console.log(openingPrices.toString());
//    console.log(closingPrices.toString());
//
//    $scope.data = [
//        {
//            key: "Opening Prices",
//            values: openingPrices
//        },
//        {
//            key: "Closing Prices",
//            values: closingPrices
//        }
//    ];
//
//    ////////////////////////////////
//
//    var chart, svg;
//
//    var initialize = function () {
//        setUpSvg();
//        setUpChart();
//        renderChart();
//    };
//    var setUpSvg = function () {
//        var svgAttributes = {
//            width: 500,
//            height: 300,
//            padding: 25,
//            margin : {
//                top: 5,
//                right: 10,
//                bottom: 5,
//                left: 10
//            }
//        };
//
//        svg = d3.select('#chart').append('svg');
//        svg.style({
//            'width': svgAttributes.width + svgAttributes.margin.left + svgAttributes.margin.right,
//            'height': svgAttributes.height + svgAttributes.margin.top + svgAttributes.margin.bottom,
//            'padding': svgAttributes.padding,
//            'margin': '0 auto'
//        });
//
//        svg.datum($scope.data);
//        svg.transition().duration(500);
//    };
//
//    var setUpChart = function () {
//        chart = nv.models.lineChart();
//        chart.options({
//            x: getX,
//            y: getY,
//            noData: "Not enough Data to graph",
//            transitionDuration: 500,
//            showLegend: true,
//            showXAxis: true,
//            showYAxis: true,
//            rightAlignYAxis: false
//        });
//
//        chart.xAxis
//            .axisLabel("Date and Time");
//            //.tickFormat(xAxisFormater)
//
//        chart.yAxis
//            .axisLabel("Prices")
//            .tickFormat(yAxisFormater);
//    };
//
//    var renderChart = function () {
//        chart(svg);
//    };
//
//
//
//
//    var getX = function (point, index) {
//        return point.x;
//    };
//
//    var getY = function (point, index) {
//        return point.y
//    };
//    //
//    //var xAxisFormater = function (xValue) {
//    //    console.log(typeof xValue);
//    //    return xValue.toString();
//    //};
//
//    var yAxisFormater = function (yValue) {
//        return d3.format(".2f")(yValue);
//    };
//
//    var myCallback = function ( ) {
//        console.log("addGraph callback triggered");
//    };
//
//    nv.addGraph(initialize, myCallback);
//
//});