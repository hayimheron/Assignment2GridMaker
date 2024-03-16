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
function fillAll() {
  if (colorSelected === "SELECT" || !colorSelected) {
    // Provide a gentler message to the user
    displayStatusMessage("Please choose a color first.");
    return; // Exit the function early
    } else {
        for (let i=0;i<allCells.length;i++) {
            let cell = allCells[i];
            cell.style.backgroundColor = colorSelected;
        }
    }
}


// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
