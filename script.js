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
    alert("Clicked Add Col"); // Replace this line with your code.
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
