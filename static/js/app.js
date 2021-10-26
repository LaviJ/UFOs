//Mod 11.2.4 Storyboarding

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//11.5.1 Introduction to Dynamic Tables

function buildTable(data) {
    //Clearing the existing data creates a fresh table in which we can insert data
    tbody.html("");
  }

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
