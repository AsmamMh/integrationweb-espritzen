const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,

    layout: {
        padding: {
            top: 10,
            right: 20,
            bottom: 0,
            left: 10
        }
    },

  animation: {
    duration: 1200,
    easing: 'easeOutQuart'
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#6B6B6B', padding: 6 }
    },
    y: {
        min: 50,
      grid: { color: '#EAEAEA' },
      ticks: { color: '#6B6B6B', padding: 6 }
    }
  }
};

/* STEP HISTORY */
new Chart(document.getElementById('stepsChart'), {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [186, 305, 237, 73, 209, 214, 180],
      borderColor: '#8B5E3C',
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.35,
      pointRadius: 4,
      pointBackgroundColor: '#8B5E3C'
    }]
  },
  options: baseOptions
});

/* KM HISTORY */
new Chart(document.getElementById('kmChart'), {
  type: 'line',
  data: {
    labels: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
    datasets: [{
      data: [0, 1, 2, 3, 1, 2],
      borderColor: '#8B5E3C',
      backgroundColor: 'transparent',
      borderWidth: 2,
      stepped: true,
      pointRadius: 3,
      pointBackgroundColor: '#8B5E3C'
    }]
  },
  options: baseOptions
});

/* WATER INTAKE */
new Chart(document.getElementById('waterChart'), {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [200, 300, 240, 80, 210, 220, 190],
      borderColor: '#8B5E3C',
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.35,
      pointRadius: 4,
      pointBackgroundColor: '#8B5E3C'
    }]
  },
  options: baseOptions
});
