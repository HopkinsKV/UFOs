// This code builds the HTML table and fills it with data from data.js.
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build table and clear data, 
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        });
    });
  }

  // Button clicking function
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // If a date was entered, filter the data using that date.
  if (date) {
    // Apply `filter` & return rows where `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  buildTable(filteredData);
}
// Listen for click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);