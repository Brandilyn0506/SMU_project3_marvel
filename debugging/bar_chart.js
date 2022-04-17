$(document).ready(function() {
    getDataAndPlot();
});

function getDataAndPlot() {
    d3.csv('static/data/powers.csv').function(data) {
        var names= data.Name;
        var powers= data.powers_total;
        Highcharts.chart('container', {
            chart: {
            type: 'bar'
            },
            title: {
            text: 'Total Powers for Each SuperHero'
            },
            xAxis: {
            categories: powers,
            title: {
                text: 'Total Number of Powers',
                align: 'high'
            }
            },
            yAxis: {
            categories: names
            title: {
                text: null
            },
            labels: {
                overflow: 'justify'
            },
            tooltip: {
            valueSuffix: ' millions'
            },
            plotOptions: {
            bar: {
                dataLabels: {
                enabled: true
                }
            }
            },
            legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 5000,
            y: 500,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
            },
            credits: {
            enabled: false
            },
        }}
        )}
    }
}