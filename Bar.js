// Retrieve data from file
fetch('data.txt')
  .then(response => response.text())
  .then(data => {
    const labels = [];  // Store x-axis labels
    const values = [];  // Store y-axis values
    
    // Parse data into labels and values
    const lines = data.split('\n');
    lines.forEach(line => {
      const [label, value] = line.split(':');
      labels.push(label);
      values.push(value);
    });
    
    // Create chart using Chart.js
    const chart = new Chart(document.getElementById('Barchart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  })
  .catch(error => {
    console.error('Error retrieving data:', error);
  });
