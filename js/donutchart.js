google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Bills', 950],
        ['Eating out', 150],
        ['Transport', 300],
        ['Entertainment', 90],
        ['Shopping', 500]
    ]);

    var options = {
        // title: 'My Daily Activities',
        pieHole: 0.4,
        // legend: 'none',
        legend: {position: 'labeled'},
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
