// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    //alert("Clicked Add Col"); 
    //Cells didn't previously exist
    if (numRows == 0) {
        let row = grid.insertRow(-1);
        row.setAttribute("row", numRows+1);
        let cell = row.insertCell();
        cell.setAttribute("row", numRows+1);
        cell.setAttribute("col", numCols+1);
        numRows++;
    } else { //Rows existed, now add a cell at the end of each row
        for (let i=0; i<numRows; i++) {
            let row = grid.rows[i];
            let cell = row.insertCell();
            cell.setAttribute("row", i+1);
            cell.setAttribute("col", numCols+1);
        }
    }
    //Increase counter
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
