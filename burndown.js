Chart.defaults.line.spanGaps = true;

var taskHourTotal=DailyTaskHour.total;
var contx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(contx, {
  type: 'line',
  data: {
    labels: ['Wednesday',
             'Thursday',
             'Friday',
             'Monday',
             'Tuesday',
             'Wednesday',
             'Thursday',
             'Friday',
             'Monday',
             'Tuesday',
             'Wednesday',
             'Thursday',
             'Friday',
             'Monday',
             'Tuesday'],
    datasets: [{
      label: 'The Line',
      data: [taskHourTotal,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             NaN,
             0],
      fill: true,
      backgroundColor: 'rgba(0, 150, 55, 0.5)'
    }, {
      label: 'Actual',
      data: DailyTaskHour.data,
      backgroundColor: 'rgba(66, 000, 01, 0.85)'
    }]
  },

  // Configuration options go here
  options: {}
});

function newActual() {
  var new_task_hour = document.getElementById('task_hours').value;
  console.log(new_task_hour)
  DailyTaskHour.data.push(new_task_hour);
  myChart.update();
}

function setTaskHoursTotals(){
  taskHourTotal = document.getElementById('taskHours').value;
  console.log(taskHourTotal);
  myChart.update();
}
