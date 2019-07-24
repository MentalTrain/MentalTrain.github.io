<script>
// Global parameters:
Chart.defaults.global.responsive = true;

// Define the chart data
var chartDataMonth = {
  labels: [{% for item in days_labels %}"{{ item }}", {% endfor %}],
  datasets: [{
      label: 'Amount paid',
      fill: false,
      backgroundColor: "#dc3545",
      borderColor: "#dc3545",
      data: [{% for item in paid_this_month %}{{ '%0.2f'| format(item|float) }}, {% endfor %}],
  },
  {
      label: 'Amount topped up',
      fill: false,
      backgroundColor: "#007bff",
      borderColor: "#007bff",
      data: [{% for item in topped_this_month %}{{ '%0.2f'| format(item|float) }}, {% endfor %}],
  }]
};

// Get chart canvas
var ctx = document.querySelector('#transactions-chart').getContext('2d');
// Create the chart using the chart canvas
var transactionsChart = new Chart(ctx, {
  type: 'line',
  data: chartDataMonth,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function(tooltipItems, data) {
          return '€' + tooltipItems.yLabel;
        }
      }
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Day'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Amount'
        },
        ticks: {
          // Include a euro sign in the ticks
          callback: function(value, index, values) {
            return '€' + value;
          }
        }
      }]
    }
  }
});
</script>