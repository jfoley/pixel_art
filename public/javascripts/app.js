function initialize(containerId) {
  var containerNode = document.getElementById(containerId);
  createGrid(10, 10, containerNode);
}

function createCell(containerNode) {
  var cellNode = document.createElement('div');
  cellNode.className = "cell";
  cellNode.addEventListener('click', function() {
    clickOnCell(this);
  });
  containerNode.appendChild(cellNode);
}

function createRow(numberOfCells, containerNode) {
  var rowNode = document.createElement('div');
  rowNode.className = 'row';

  for(var i = 0; i < numberOfCells; i++) {
    createCell(rowNode);
  }

  containerNode.appendChild(rowNode);
}

function createGrid(rows, columns, containerNode) {
  for(var i = 0; i < rows; i++) {
    createRow(columns, containerNode);
  }
}

function clickOnCell(cellNode) {
  cellNode.style.backgroundColor = 'black';
}
