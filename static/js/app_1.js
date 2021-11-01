//Mod 11.2.4 Storyboarding

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//11.5.1 Introduction to Dynamic Tables

function buildTable(data) {
    //Clearing the existing data creates a fresh table in which we can insert data
    tbody.html("");


 //11.5.2  Add forEach to Your Table
    //incorporate a forEach function that loops through our data array, and then adds rows of data to the table
    data.forEach((dataRow) => {
        //create a variable that will append a row to the HTML table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow argument.
        Object.values(dataRow).forEach((val) => {
            //append each value of the object to a cell in the table
            let cell = row.append("td");
            //add the values
            cell.text(val);
            }
        );
    });
}

// Mod 11.5.3 Add Filters
//handling what to do after an input is given such as button click
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  //Listen for the Event
  //aspect of D3.js is that it can listen for events that occur on a webpage, such as a button click
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);

  //Build the Final Table when the page loads
  buildTable(tableData);


