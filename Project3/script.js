// Button to Scroll Top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

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
animateCount(obj, 0, 533306, 6000);

document.addEventListener("DOMContentLoaded", function () {
  function animateCountOnScroll() {
    const obj = document.getElementById("count");
    const rect = obj.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
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
  .then((response) => response.json())
  .then((data) => {
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

      sortedData.forEach((item) => {
        const row = tableBody.insertRow();

        for (const key in item) {
          const cell = row.insertCell();
          cell.innerText = item[key];
        }
      });
    }

    function compare(prop, order) {
      return function (a, b) {
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
// Retrieve the JSON data
fetch("collection.json")
  .then((response) => response.json())
  .then((data) => {
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
    const ctx = document.getElementById("deaths-chart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "Number of Deaths",
            data: deaths,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  })
  .catch((error) => console.error(error));
// Get data from collection.json
fetch("collection.json")
  .then((response) => response.json())
  .then((data) => {
    // Group the data by year
    const groupedData = data.reduce((acc, curr) => {
      if (!acc[curr.Year]) {
        acc[curr.Year] = 0;
      }
      acc[curr.Year] += curr.Deaths;
      return acc;
    }, {});

    // Extract the years and death counts from the grouped data
    const years = Object.keys(groupedData).map((year) => parseInt(year));
    const deathCounts = Object.values(groupedData);

    // Create the bar chart
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "",
            data: deathCounts,
            backgroundColor: "#ddd",
            borderColor: "#ddd",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#ddd",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#ddd",
              },
            },
          ],
        },
      },
    });
  });

// Load the data from the JSON file
fetch("collection.json")
  .then((response) => response.json())
  .then((data) => {
    // Extract the leading causes of death data
    const leadingCauses = data.reduce((acc, curr) => {
      const cause = curr["Leading Cause"];
      if (acc[cause]) {
        acc[cause] += parseInt(curr["Deaths"]);
      } else {
        acc[cause] = parseInt(curr["Deaths"]);
      }
      return acc;
    }, {});

    // Convert the data into an array of objects
    const pieData = Object.keys(leadingCauses).map((cause) => ({
      label: cause,
      data: leadingCauses[cause],
    }));

    // Create the chart
    const ctx = document.getElementById("myPieChart").getContext("2d");
    const myPieChart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            data: pieData.map((d) => d.data),
            backgroundColor: [
              "#08F7FE",
              "#09FBD3",
              "#FE53BB",
              "#F5D300",
              "#FFACFC",
              "#7122FA",
              "#F148FB",
              "#011FFD",
              "#FF2281",
              "#E8E500",
              "#00FECA",
              "#02B8A2",
              "#00207F",
              "#FF8B8B",
              "#01FFC3",
              "#F21A1D",
            ],

            borderColor: "#ddd",
          },
        ],
        labels: pieData.map((d) => d.label),
      },
      options: {
        responsive: true,
        legend: {
          position: "right",
        },
      },
    });
  });
