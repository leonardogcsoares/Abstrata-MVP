/**
 * Created by leonardogcsoares on 3/7/2016.
 */
angular.module('abstrata').directive('angularChart', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/angular-chart/angular-chart.component.html',
        controller: function ($scope, $interval) {
            var chartData = [
                {"contractVolume": "71", "openingPrice": "1839.5", "closingPrice": "1839", "maxPrice": "1840", "dateOfPrice": "2012.04.13 10:10:00", "minPrice": "1838.5"},
                {"contractVolume": "29", "openingPrice": "1838.5", "closingPrice": "1838", "maxPrice": "1839", "dateOfPrice": "2012.04.13 10:20:00", "minPrice": "1837.5"},
                {"contractVolume": "398", "openingPrice": "1837.5", "closingPrice": "1839.5", "maxPrice": "1841", "dateOfPrice": "2012.04.13 10:30:00", "minPrice": "1837.5"},
                {"contractVolume": "94", "openingPrice": "1840.5", "closingPrice": "1839", "maxPrice": "1840.5", "dateOfPrice": "2012.04.13 10:40:00", "minPrice": "1839"},
                {"contractVolume": "162", "openingPrice": "1839.5", "closingPrice": "1840.5", "maxPrice": "1841", "dateOfPrice": "2012.04.13 10:50:00", "minPrice": "1839.5"},
                {"contractVolume": "449", "openingPrice": "1841", "closingPrice": "1841", "maxPrice": "1842", "dateOfPrice": "2012.04.13 11:00:00", "minPrice": "1840"},
                {"contractVolume": "335", "openingPrice": "1841", "closingPrice": "1841.5", "maxPrice": "1841.5", "dateOfPrice": "2012.04.13 11:10:00", "minPrice": "1840"},
                {"contractVolume": "384", "openingPrice": "1841.5", "closingPrice": "1842.5", "maxPrice": "1845", "dateOfPrice": "2012.04.13 11:20:00", "minPrice": "1841.5"},
                {"contractVolume": "592", "openingPrice": "1843.5", "closingPrice": "1845.5", "maxPrice": "1847", "dateOfPrice": "2012.04.13 11:30:00", "minPrice": "1843.5"},
                {"contractVolume": "486", "openingPrice": "1845", "closingPrice": "1846.5", "maxPrice": "1847.5", "dateOfPrice": "2012.04.13 11:40:00", "minPrice": "1844"},
                {"contractVolume": "242", "openingPrice": "1846.5", "closingPrice": "1844", "maxPrice": "1847", "dateOfPrice": "2012.04.13 11:50:00", "minPrice": "1844"},
                {"contractVolume": "325", "openingPrice": "1844", "closingPrice": "1845", "maxPrice": "1845", "dateOfPrice": "2012.04.13 12:00:00", "minPrice": "1843.5"},
                {"contractVolume": "116", "openingPrice": "1845.5", "closingPrice": "1845.5", "maxPrice": "1845.5", "dateOfPrice": "2012.04.13 12:10:00", "minPrice": "1844.5"},
                {"contractVolume": "70", "openingPrice": "1845", "closingPrice": "1844", "maxPrice": "1845", "dateOfPrice": "2012.04.13 12:20:00", "minPrice": "1844"},
                {"contractVolume": "139", "openingPrice": "1844", "closingPrice": "1843", "maxPrice": "1844", "dateOfPrice": "2012.04.13 12:30:00", "minPrice": "1842"},
                {"contractVolume": "62", "openingPrice": "1843", "closingPrice": "1843", "maxPrice": "1843.5", "dateOfPrice": "2012.04.13 12:40:00", "minPrice": "1842.5"},
                {"contractVolume": "121", "openingPrice": "1843", "closingPrice": "1843", "maxPrice": "1844", "dateOfPrice": "2012.04.13 12:50:00", "minPrice": "1842"},
                {"contractVolume": "61", "openingPrice": "1843.5", "closingPrice": "1843.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.13 13:00:00", "minPrice": "1843"},
                {"contractVolume": "48", "openingPrice": "1844", "closingPrice": "1844", "maxPrice": "1844.5", "dateOfPrice": "2012.04.13 13:10:00", "minPrice": "1843.5"},
                {"contractVolume": "29", "openingPrice": "1844", "closingPrice": "1844", "maxPrice": "1844", "dateOfPrice": "2012.04.13 13:20:00", "minPrice": "1843.5"},
                {"contractVolume": "45", "openingPrice": "1844", "closingPrice": "1844", "maxPrice": "1844", "dateOfPrice": "2012.04.13 13:30:00", "minPrice": "1843.5"},
                {"contractVolume": "96", "openingPrice": "1844", "closingPrice": "1843", "maxPrice": "1844", "dateOfPrice": "2012.04.13 13:40:00", "minPrice": "1843"},
                {"contractVolume": "124", "openingPrice": "1843", "closingPrice": "1844", "maxPrice": "1844.5", "dateOfPrice": "2012.04.13 13:50:00", "minPrice": "1843"},
                {"contractVolume": "48", "openingPrice": "1843.5", "closingPrice": "1843", "maxPrice": "1843.5", "dateOfPrice": "2012.04.13 14:00:00", "minPrice": "1842.5"},
                {"contractVolume": "167", "openingPrice": "1842", "closingPrice": "1842.5", "maxPrice": "1842.5", "dateOfPrice": "2012.04.13 14:10:00", "minPrice": "1841"},
                {"contractVolume": "83", "openingPrice": "1843", "closingPrice": "1843.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.13 14:20:00", "minPrice": "1842.5"},
                {"contractVolume": "50", "openingPrice": "1843", "closingPrice": "1841.5", "maxPrice": "1843", "dateOfPrice": "2012.04.13 14:30:00", "minPrice": "1841.5"},
                {"contractVolume": "12", "openingPrice": "1841", "closingPrice": "1841.5", "maxPrice": "1842", "dateOfPrice": "2012.04.13 14:40:00", "minPrice": "1841"},
                {"contractVolume": "36", "openingPrice": "1841.5", "closingPrice": "1842.5", "maxPrice": "1842.5", "dateOfPrice": "2012.04.13 14:50:00", "minPrice": "1841.5"},
                {"contractVolume": "108", "openingPrice": "1842.5", "closingPrice": "1843", "maxPrice": "1844.5", "dateOfPrice": "2012.04.13 15:00:00", "minPrice": "1842.5"},
                {"contractVolume": "66", "openingPrice": "1843", "closingPrice": "1843.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.13 15:10:00", "minPrice": "1843"},
                {"contractVolume": "55", "openingPrice": "1843", "closingPrice": "1843", "maxPrice": "1843.5", "dateOfPrice": "2012.04.13 15:20:00", "minPrice": "1842"},
                {"contractVolume": "70", "openingPrice": "1843.5", "closingPrice": "1843.5", "maxPrice": "1844", "dateOfPrice": "2012.04.13 15:30:00", "minPrice": "1842.5"},
                {"contractVolume": "266", "openingPrice": "1843.5", "closingPrice": "1844", "maxPrice": "1846.5", "dateOfPrice": "2012.04.13 15:40:00", "minPrice": "1843.5"},
                {"contractVolume": "124", "openingPrice": "1844.5", "closingPrice": "1843.5", "maxPrice": "1844.5", "dateOfPrice": "2012.04.13 15:50:00", "minPrice": "1843.5"},
                {"contractVolume": "120", "openingPrice": "1844", "closingPrice": "1843", "maxPrice": "1844", "dateOfPrice": "2012.04.13 16:00:00", "minPrice": "1842.5"},
                {"contractVolume": "89", "openingPrice": "1843", "closingPrice": "1843.5", "maxPrice": "1844.5", "dateOfPrice": "2012.04.13 16:10:00", "minPrice": "1843"},
                {"contractVolume": "65", "openingPrice": "1843.5", "closingPrice": "1843.5", "maxPrice": "1844", "dateOfPrice": "2012.04.13 16:20:00", "minPrice": "1843.5"},
                {"contractVolume": "152", "openingPrice": "1844", "closingPrice": "1845", "maxPrice": "1846", "dateOfPrice": "2012.04.13 16:30:00", "minPrice": "1844"},
                {"contractVolume": "45", "openingPrice": "1845", "closingPrice": "1845.5", "maxPrice": "1845.5", "dateOfPrice": "2012.04.13 16:40:00", "minPrice": "1844.5"},
                {"contractVolume": "101", "openingPrice": "1845", "closingPrice": "1845", "maxPrice": "1846", "dateOfPrice": "2012.04.13 16:50:00", "minPrice": "1845"},
                {"contractVolume": "28", "openingPrice": "1845.5", "closingPrice": "1844.5", "maxPrice": "1846", "dateOfPrice": "2012.04.13 17:00:00", "minPrice": "1844.5"},
                {"contractVolume": "80", "openingPrice": "1844.5", "closingPrice": "1846", "maxPrice": "1846", "dateOfPrice": "2012.04.13 17:10:00", "minPrice": "1844.5"},
                {"contractVolume": "53", "openingPrice": "1845", "closingPrice": "1845.5", "maxPrice": "1846", "dateOfPrice": "2012.04.13 17:20:00", "minPrice": "1845"},
                {"contractVolume": "76", "openingPrice": "1846", "closingPrice": "1846.5", "maxPrice": "1847", "dateOfPrice": "2012.04.13 17:30:00", "minPrice": "1846"},
                {"contractVolume": "37", "openingPrice": "1846.5", "closingPrice": "1847", "maxPrice": "1847", "dateOfPrice": "2012.04.13 17:40:00", "minPrice": "1846.5"},
                {"contractVolume": "244", "openingPrice": "1846.5", "closingPrice": "1847", "maxPrice": "1847.5", "dateOfPrice": "2012.04.13 17:50:00", "minPrice": "1844.5"},
                {"contractVolume": "132", "openingPrice": "1847", "closingPrice": "1847", "maxPrice": "1848", "dateOfPrice": "2012.04.16 09:00:00", "minPrice": "1846.5"},
                {"contractVolume": "184", "openingPrice": "1846.5", "closingPrice": "1844.5", "maxPrice": "1846.5", "dateOfPrice": "2012.04.16 09:10:00", "minPrice": "1844"},
                {"contractVolume": "109", "openingPrice": "1844", "closingPrice": "1843.5", "maxPrice": "1845", "dateOfPrice": "2012.04.16 09:20:00", "minPrice": "1842.5"},
                {"contractVolume": "308", "openingPrice": "1844", "closingPrice": "1841", "maxPrice": "1844", "dateOfPrice": "2012.04.16 09:30:00", "minPrice": "1839.5"},
                {"contractVolume": "104", "openingPrice": "1841", "closingPrice": "1839.5", "maxPrice": "1841", "dateOfPrice": "2012.04.16 09:40:00", "minPrice": "1839"},
                {"contractVolume": "214", "openingPrice": "1839.5", "closingPrice": "1840", "maxPrice": "1841", "dateOfPrice": "2012.04.16 09:50:00", "minPrice": "1838"},
                {"contractVolume": "114", "openingPrice": "1840.5", "closingPrice": "1840", "maxPrice": "1841", "dateOfPrice": "2012.04.16 10:00:00", "minPrice": "1839.5"},
                {"contractVolume": "113", "openingPrice": "1839.5", "closingPrice": "1840", "maxPrice": "1840.5", "dateOfPrice": "2012.04.16 10:10:00", "minPrice": "1839.5"},
                {"contractVolume": "106", "openingPrice": "1839.5", "closingPrice": "1839", "maxPrice": "1839.5", "dateOfPrice": "2012.04.16 10:20:00", "minPrice": "1838"},
                {"contractVolume": "95", "openingPrice": "1839", "closingPrice": "1840", "maxPrice": "1840", "dateOfPrice": "2012.04.16 10:30:00", "minPrice": "1839"},
                {"contractVolume": "169", "openingPrice": "1840", "closingPrice": "1841.5", "maxPrice": "1842", "dateOfPrice": "2012.04.16 10:40:00", "minPrice": "1839.5"},
                {"contractVolume": "162", "openingPrice": "1841.5", "closingPrice": "1843", "maxPrice": "1843", "dateOfPrice": "2012.04.16 10:50:00", "minPrice": "1841.5"},
                {"contractVolume": "372", "openingPrice": "1843", "closingPrice": "1843.5", "maxPrice": "1844", "dateOfPrice": "2012.04.16 11:00:00", "minPrice": "1842.5"},
                {"contractVolume": "159", "openingPrice": "1843", "closingPrice": "1844", "maxPrice": "1844.5", "dateOfPrice": "2012.04.16 11:10:00", "minPrice": "1843"},
                {"contractVolume": "141", "openingPrice": "1843.5", "closingPrice": "1842", "maxPrice": "1843.5", "dateOfPrice": "2012.04.16 11:20:00", "minPrice": "1842"},
                {"contractVolume": "87", "openingPrice": "1842.5", "closingPrice": "1843.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.16 11:30:00", "minPrice": "1842"},
                {"contractVolume": "125", "openingPrice": "1843.5", "closingPrice": "1841.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.16 11:40:00", "minPrice": "1841"},
                {"contractVolume": "194", "openingPrice": "1841.5", "closingPrice": "1842.5", "maxPrice": "1843", "dateOfPrice": "2012.04.16 11:50:00", "minPrice": "1841.5"},
                {"contractVolume": "184", "openingPrice": "1842.5", "closingPrice": "1840.5", "maxPrice": "1842.5", "dateOfPrice": "2012.04.16 12:00:00", "minPrice": "1840.5"},
                {"contractVolume": "88", "openingPrice": "1840.5", "closingPrice": "1842.5", "maxPrice": "1842.5", "dateOfPrice": "2012.04.16 12:10:00", "minPrice": "1840.5"},
                {"contractVolume": "127", "openingPrice": "1842.5", "closingPrice": "1842.5", "maxPrice": "1843", "dateOfPrice": "2012.04.16 12:20:00", "minPrice": "1842.5"},
                {"contractVolume": "90", "openingPrice": "1842.5", "closingPrice": "1843.5", "maxPrice": "1844", "dateOfPrice": "2012.04.16 12:30:00", "minPrice": "1842.5"},
                {"contractVolume": "62", "openingPrice": "1843.5", "closingPrice": "1844", "maxPrice": "1844", "dateOfPrice": "2012.04.16 12:40:00", "minPrice": "1842.5"},
                {"contractVolume": "125", "openingPrice": "1844", "closingPrice": "1844", "maxPrice": "1845.5", "dateOfPrice": "2012.04.16 12:50:00", "minPrice": "1843.5"},
                {"contractVolume": "125", "openingPrice": "1844", "closingPrice": "1845", "maxPrice": "1845", "dateOfPrice": "2012.04.16 13:00:00", "minPrice": "1842.5"},
                {"contractVolume": "44", "openingPrice": "1845", "closingPrice": "1844.5", "maxPrice": "1845", "dateOfPrice": "2012.04.16 13:10:00", "minPrice": "1844"},
                {"contractVolume": "45", "openingPrice": "1845", "closingPrice": "1844.5", "maxPrice": "1845.5", "dateOfPrice": "2012.04.16 13:20:00", "minPrice": "1844"},
                {"contractVolume": "76", "openingPrice": "1844", "closingPrice": "1846.5", "maxPrice": "1846.5", "dateOfPrice": "2012.04.16 13:30:00", "minPrice": "1844"},
                {"contractVolume": "41", "openingPrice": "1846", "closingPrice": "1846.5", "maxPrice": "1846.5", "dateOfPrice": "2012.04.16 13:40:00", "minPrice": "1845.5"},
                {"contractVolume": "281", "openingPrice": "1846", "closingPrice": "1846.5", "maxPrice": "1847.5", "dateOfPrice": "2012.04.16 13:50:00", "minPrice": "1846"},
                {"contractVolume": "112", "openingPrice": "1846", "closingPrice": "1845.5", "maxPrice": "1846", "dateOfPrice": "2012.04.16 14:00:00", "minPrice": "1845"},
                {"contractVolume": "121", "openingPrice": "1845.5", "closingPrice": "1845", "maxPrice": "1847", "dateOfPrice": "2012.04.16 14:10:00", "minPrice": "1844.5"},
                {"contractVolume": "19", "openingPrice": "1845.5", "closingPrice": "1845", "maxPrice": "1845.5", "dateOfPrice": "2012.04.16 14:20:00", "minPrice": "1844.5"},
                {"contractVolume": "104", "openingPrice": "1844.5", "closingPrice": "1843", "maxPrice": "1845", "dateOfPrice": "2012.04.16 14:30:00", "minPrice": "1842.5"},
                {"contractVolume": "165", "openingPrice": "1843", "closingPrice": "1842.5", "maxPrice": "1843", "dateOfPrice": "2012.04.16 14:40:00", "minPrice": "1841"},
                {"contractVolume": "53", "openingPrice": "1842.5", "closingPrice": "1842.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.16 14:50:00", "minPrice": "1842"},
                {"contractVolume": "89", "openingPrice": "1842", "closingPrice": "1843", "maxPrice": "1843", "dateOfPrice": "2012.04.16 15:00:00", "minPrice": "1842"},
                {"contractVolume": "68", "openingPrice": "1843.5", "closingPrice": "1843", "maxPrice": "1843.5", "dateOfPrice": "2012.04.16 15:10:00", "minPrice": "1843"},
                {"contractVolume": "109", "openingPrice": "1843", "closingPrice": "1845.5", "maxPrice": "1846", "dateOfPrice": "2012.04.16 15:20:00", "minPrice": "1843"},
                {"contractVolume": "105", "openingPrice": "1845.5", "closingPrice": "1843.5", "maxPrice": "1845.5", "dateOfPrice": "2012.04.16 15:30:00", "minPrice": "1842"},
                {"contractVolume": "51", "openingPrice": "1843.5", "closingPrice": "1843.5", "maxPrice": "1843.5", "dateOfPrice": "2012.04.16 15:40:00", "minPrice": "1843"},
                {"contractVolume": "77", "openingPrice": "1843", "closingPrice": "1844.5", "maxPrice": "1844.5", "dateOfPrice": "2012.04.16 15:50:00", "minPrice": "1842.5"},
                {"contractVolume": "202", "openingPrice": "1844.5", "closingPrice": "1846", "maxPrice": "1846", "dateOfPrice": "2012.04.16 16:00:00", "minPrice": "1844"},
                {"contractVolume": "138", "openingPrice": "1846", "closingPrice": "1846.5", "maxPrice": "1847", "dateOfPrice": "2012.04.16 16:10:00", "minPrice": "1845.5"},
                {"contractVolume": "50", "openingPrice": "1846", "closingPrice": "1845.5", "maxPrice": "1846", "dateOfPrice": "2012.04.16 16:20:00", "minPrice": "1845.5"},
                {"contractVolume": "37", "openingPrice": "1845.5", "closingPrice": "1845.5", "maxPrice": "1846", "dateOfPrice": "2012.04.16 16:30:00", "minPrice": "1845.5"},
                {"contractVolume": "79", "openingPrice": "1845.5", "closingPrice": "1847.5", "maxPrice": "1847.5", "dateOfPrice": "2012.04.16 16:40:00", "minPrice": "1845.5"},
                {"contractVolume": "104", "openingPrice": "1847.5", "closingPrice": "1848.5", "maxPrice": "1848.5", "dateOfPrice": "2012.04.16 16:50:00", "minPrice": "1847"},
                {"contractVolume": "306", "openingPrice": "1848.5", "closingPrice": "1849.5", "maxPrice": "1850", "dateOfPrice": "2012.04.16 17:00:00", "minPrice": "1848.5"},
                {"contractVolume": "83", "openingPrice": "1850", "closingPrice": "1851", "maxPrice": "1851.5", "dateOfPrice": "2012.04.16 17:10:00", "minPrice": "1850"},
                {"contractVolume": "144", "openingPrice": "1851", "closingPrice": "1853", "maxPrice": "1855", "dateOfPrice": "2012.04.16 17:20:00", "minPrice": "1851"},
                {"contractVolume": "106", "openingPrice": "1853.5", "closingPrice": "1852.5", "maxPrice": "1853.5", "dateOfPrice": "2012.04.16 17:30:00", "minPrice": "1852"}
            ];

            var openingPricesAll = [];
            var closingPricesAll = [];
            var labelsAll = [];
            $scope.labels = [];
            $scope.series = ["Opening Prices", "Closing Prices"];
            var i = 0;
            chartData.forEach(function (instance) {
                openingPricesAll.push(instance.openingPrice);
                closingPricesAll.push(instance.closingPrice);
                labelsAll.push(instance.dateOfPrice);
            });


            var start = 0, end = 10;
            var openingPrices = [];
            var closingPrices = [];
            var changeChartData = function () {
                if(end == chartData.length) {
                    start = 0;
                    end = 10;
                }

                openingPrices = openingPricesAll.slice(start, end);
                closingPrices = closingPricesAll.slice(start, end);
                $scope.labels = labelsAll.slice(start++, end++);

                $scope.data = [
                    openingPrices,
                    closingPrices
                ];
                console.log("Change data ")
            };

            $interval(changeChartData, 2000);



            $scope.onClick = function (points, env) {
                console.log(points, env);
            };
        }
    }
});