// Define the grid size
const rows = 9;
const columns = 9;

const rowsList = [];
const colList = [];

let rowNumTracker = 1;
let colNumTracker = 1;

// Get the grid container element
const gridContainer = document.getElementById('myGrid');

// Create the grid dynamically
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    // Create a grid item element
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    // gridItem.textContent = 9;
    gridItem.classList.add('rowNum-' + rowNumTracker);
    gridItem.classList.add('colNum-' + colNumTracker);
    colNumTracker++;
    if (colNumTracker == 10) {
      colNumTracker = 1;
    }

    // Append the grid item to the grid container
    gridContainer.appendChild(gridItem);
  }
  rowNumTracker++;
}