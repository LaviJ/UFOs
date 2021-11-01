![image-20211027151532421](C:\Users\lavin\AppData\Roaming\Typora\typora-user-images\image-20211027151532421.png)





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UFO Finder</title>
<!--setup by adding a link to Bootstrap's content delivery network (CDN)-->
<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />
<!--add a link to our stylesheet, link to the style.css file that's in our css folder-->
<link rel="stylesheet" href="static/css/style.css">
</head>
<body class="bg-dark">
    <!--The wrapper class helps group the elements-->
    <div class="wrapper">
    <!--Build the Navbar, lg provides extra responsiveness to the default navbar behavior-->
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <!--add a link, navbar-brand” is a type of default styling that helps with the site’s aesthetics-->
        <a class="navbar-brand" href="index.html">UFO Sightings</a>
    </nav>
    </div>
    <!--a header tag nested within a jumbotron will be larger and bolder-->
    <div class="jumbotron">
        <h1 class="display-4">The Truth is Out There</h1>
      </div>
<!--Adding "container-fluid" to the div will ensure that both elements we're adding will span the width of the viewport-->
    <div class="container-fluid">
        <div class="row">
            <!--assign four columns to the article title and the remaining eight to the paragraph-->
        <div class="col-md-4">
            <h3>UFO Sightings: Fact or Fancy? <small>Ufologists Weigh In</small></h3>
        </div>
        <div class="col-md-8">
            <p>
                Are we alone in the universe? For millennia, humans have turned to the sky to answer this question. Now, thanks to research generously funded by W. Avy, a UFO-enthusiast and amateur ufologist, we can supplement our sky-searching with data analysis.<br><br>"The release of this analysis is well-timed: It coincides with the celebration of World UFO Day, which is a moment for ufologists around the world to connect, relax, and sample a range of UFO-themed snacks," said Dr. Ursula F. Olivier, the world's preeminent expert on circular sightings. "Citizen-scientists can be especially helpful in both cataloguing sightings—which is hugely helpful for us in our search for aliens—and in helping us celebrate the work that has already been done, such as this data visualization project, which will help us raise awareness of the ubiquity of sightings!"<br><br>Not everyone is ready to celebrate, however. Local CEO and vocal anti-alien activist V. Isualize reached out to our reporters to go on record as firmly opposed to any attempts to provide access to this data. "If there are aliens, they certainly would like to be left alone," she stated, before directing us to the Leave Aliens Alone (LAA) community engagement initiative she founded and funds.<br><br>So what do YOU think? Are we alone in the universe? Are aliens trying to contact us, or do they want to be left alone? Dig through the data yourself, and let us know what you see.


            </p>
        </div>
    </div>

<!--Create the Table Filter-->
<!--Creating another fluid container-->
    <div class="container-fluid"><!---->
        <div class="row">
            <div class="col-md-3">
                <!--add a form tag, then build the form by nesting additional elements-->
                <form>
                    <p>Filter Search</p>
                    <!--add an input box for a date-->
                    <!--give this a class of "list-group."-->
                    <ul class="list-group bg-dark">
                        <!--add the list items: one for the input, one for the button-->
                        <li class="list-group-item bg-dark">
                            <!--add the label tag-->
                            <!--label represents a caption for the date item-->
                            <label for="date">Enter Date</label>
                            <!--code will look for text to be input,date to search, code will look for when the button is clicked-->
                            <input type="text" placeholder="1/10/2010" id="datetime" />
                        </li>

​                    

                        <li class="list-group-item bg-dark">
                        <!--add a button tag with a few additional attributes: the id we defined in our JavaScript code (#filter-btn), a type, and a class-->
                            <button id="filter-btn" type="button" class="btn btn-dark">Filter Table</button>
                        </li>
                    </ul>


​    
​    

                  </form>
            </div>
            <div class="col-md-9">
                <!--Bootstrap styling by adding the classes "table table-striped"-->
                <table class="table table-striped">
                <!--will have a few nested tags within it-->
                <thead>
                    <!--everything nested within it will be displayed as a row of data-->
                    <tr>
                        <th>Date</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Shape</th>
                        <th>Duration</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody></tbody>
                </table>
            </div>
    
            </div>
        </div>
    </div>
    <!--add our scripts,When adding multiple <script /> links to a webpage, the order matters-->
    <!--link to a D3.js CDN, to "listen" in on our code, or react to user input-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
    <!--file path to data.js, UFO sightings data needs to be loaded before it can be accessed-->
    <script src="static/js/data.js"></script>
    <!--file path to app.js, access data-->
    <script src="static/js/app.js"></script>

  


</body>
</html>

<u>*File name : app.js*</u>

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





