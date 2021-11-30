const container = document.querySelector('#container');

function generateGrid(gridCount) {
	console.log("generating new grid...");
	var gridSize = Math.floor(960/gridCount);
	for (var i = 0; i < gridCount; i++) {
		const row = document.createElement('div');
		for(var j = 0; j < gridCount; j++) {
			let div = document.createElement('div');
			div.style.opacity = "1";
			div.addEventListener('mouseenter', () => {
				let opc = parseFloat(div.style.opacity) - .25;
				opc = Math.max(opc, 0);
				console.log(div.style.opacity);
				console.log(opc);
				div.style.opacity = opc.toString(); 
			});
			div.classList.add('gridCell');
			div.style.height = gridSize.toString() + 'px';
			div.style.width = gridSize.toString() + 'px';
			row.append(div);
		}
		container.append(row);
	}
}

function resetGrid() {
	while(container.firstChild) {
		container.removeChild(container.firstChild);
		console.log("removing....");
	}
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
	var gridCount = prompt("Number of grid [1-100]: ");
	while(gridCount < 1 || gridCount > 100) {
		gridCount = prompt("Grid must be from 1-100: ");
	}
	resetGrid();
	generateGrid(gridCount);
});