Meteor.startup(function () {

    var tempChartData = [];
    Assets.getText('DW10.json', function (err, data) {
        tempChartData = JSON.parse(data);
    });

    Meteor.methods({
        getChartData: function () {
            return tempChartData;
        }
    });

});