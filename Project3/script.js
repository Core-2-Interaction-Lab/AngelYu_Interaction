// Button to Scroll Top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Counting Up Diagnosed
function animateCount(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("count");
  animateCount(obj, 0, 533306, 6000 );
  
  document.addEventListener("DOMContentLoaded", function() {
  function animateCountOnScroll() {
    const obj = document.getElementById("count");
    const rect = obj.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const topVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;
    if (topVisible) {
      animateCount(obj, 0, 533306, 6000);
      window.removeEventListener("scroll", animateCountOnScroll);
    }
  }

  window.addEventListener("scroll", animateCountOnScroll);
});

//Counting Up Deaths

//Add AutoScroller button

//Collection 
		fetch("collection.json")
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector("#data-table tbody");
      const sortSelect = document.querySelector("#sort-by");
      const sortOrderSelect = document.querySelector("#sort-order");

      let sortedData = data.sort(compare("Year", "asc"));

      updateTable();

      sortSelect.addEventListener("change", updateTable);
      sortOrderSelect.addEventListener("change", updateTable);

      function updateTable() {
        const sortBy = sortSelect.value;
        const sortOrder = sortOrderSelect.value;

        sortedData = data.sort(compare(sortBy, sortOrder));

        tableBody.innerHTML = "";

        sortedData.forEach(item => {
          const row = tableBody.insertRow();

          for (const key in item) {
            const cell = row.insertCell();
            cell.innerText = item[key];
          }
        });
      }

      function compare(prop, order) {
        return function(a, b) {
          if (order === "asc") {
            if (a[prop] < b[prop]) {
              return -1;
            } else if (a[prop] > b[prop]) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (a[prop] > b[prop]) {
              return -1;
            } else if (a[prop] < b[prop]) {
              return 1;
            } else {
              return 0;
            }
          }
        };
      }
    });
; 
    // Retrieve the JSON data
fetch('collection.json')
.then(response => response.json())
.then(data => {
  // Group the data by year and calculate the total number of deaths for each year
  const groupedData = data.reduce((accumulator, currentValue) => {
    const year = currentValue.Year;
    const deaths = currentValue.Deaths;

    if (!accumulator[year]) {
      accumulator[year] = deaths;
    } else {
      accumulator[year] += deaths;
    }

    return accumulator;
  }, {});

  // Convert the grouped data into arrays for use in the chart
  const years = Object.keys(groupedData);
  const deaths = Object.values(groupedData);

  // Create the chart using Chart.js
  const ctx = document.getElementById('deaths-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Number of Deaths',
          data: deaths,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
})
.catch(error => console.error(error));
;

// Get data from collection.json
fetch('collection.json')
  .then(response => response.json())
  .then(data => {
    // Prepare data for chart.js
    let years = [];
    let deathCounts = [];
    data.forEach(item => {
      years.push(item.Year);
      deathCounts.push(item.Deaths);
    });

    // Create the bar chart
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: 'Number of deaths',
                data: deathCounts,
                backgroundColor: '#1E1E1E',
                borderColor: '#1E1E1E',
                borderWidth: 1
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
  .catch(error => console.error(error));
