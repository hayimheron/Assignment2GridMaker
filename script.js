// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
const grid = document.getElementById("grid");
const allCells = grid.getElementsByTagName("td");


// Add row
function addR() {
    let row = grid.insertRow(-1);
    row.setAttribute("row", numRows+1);
    //Create new cell if none
    if (numCols == 0) {
        let cell = row.insertCell(-1);
        cell.setAttribute("row", numRows+1);
        cell.setAttribute("col", numCols+1);
        numCols++;
    } else { //If some columns exist, complete columns and rows
        for (let i=0;i<numCols;i++) {
            let cell = row.insertCell();
            cell.setAttribute("row", numRows+1);
            cell.setAttribute("col", i+1);
        }
    }
    //Increase count by 1
    numRows++;
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
    //Rows exist
    if (numRows > 0) {
        grid.deleteRow(-1);
        numRows--;

        // Reset numCols since no more cells at all
        if (numRows == 0) {
            numCols = 0;
        }
    }

    //Table has no rows
    else
        alert("Clicked Remove Row, No rows to remove!");
}

// Remove a column
function removeC() {
    // Check if there are any columns to remove
    if (numRows > 0) {
        for (let i = 0; i < numRows; i++) {
            let row = grid.rows[i];
            // Check if there are cells in the row
            if (numCols > 0) {
                // Remove the last cell in each row
                row.deleteCell(-1);
            }
        }

        // Removed column, decrement numCols variable
        numCols--;
        // Reset numRows since no more cells at all
        if (numCols === 0) {
            for (let i = 0; i < numRows; i++) {
                grid.deleteRow(-1);
            }
            numRows = 0;
        }
    } else {
        // No columns to remove
        alert("No columns to remove, Clicked Remove Col");
    }
}

function colorSingleCell(row, col) {
    //colorSelected === "SELECT" is for if the user switches from a color back to the select option
    if (colorSelected === "SELECT" || !colorSelected) {
        alert("Select a color first!");
    } else {
        //Cell with the row and col data attributes
        let cell = document.querySelector(`td[row="${row}"][col="${col}"]`);
        cell.style.backgroundColor = colorSelected;
    }
}


// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    if (colorSelected === "SELECT" || !colorSelected) {
        alert("Select a color first!");
    } else {
        for (let i=0; i<all_cells.length; i++) {
            let cell = all_cells[i];
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}


// Fill all cells
function fillAll() {
  if (selectedColor === "SELECT") {
    // Provide a gentler message to the user
    displayStatusMessage("Please choose a color first.");
    return; // Exit the function early
  }

  // Optional: Validate that selectedColor is a valid CSS color

  fillCells(selectedColor);
}

function fillCells(color) {
  for (let i = 0; i < gridCells.length; i++) { 
    gridCells[i].style.backgroundColor = color;
  }
}


// Clear all cells
function clearAllColored(){
    for (let i=0;i<allCells.length;i++) {
        let cell = allCells[i];
        cell.style.backgroundColor = "";
    }
}
// Clear table
function clearAll(){
    if (numRows === 0) {
        alert("Nothing to clear!");
    }
    while (numRows > 0) {
        grid.deleteRow(-1);
        //Only numRows decrements
        numRows--;
    }
    numRows = 0;
    numCols = 0;
}
