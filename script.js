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
