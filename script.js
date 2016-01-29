function newGrid(x){
	for (var row = 1; row <= x; row++){
		for (var col = 1; col <= x; col++){
			$("#container").append("<div class='grid'></div>");	
		};
	};
	$(".grid").width(960/x);
	$(".grid").height(960/x);
};

function clearGrid() {
	$(".grid").remove();
}

function refreshGrid() {
	
	var numSquares = prompt("Enter a number between 1 - 63");
	
	if (numSquares <= 63 && numSquares >= 1) {
		clearGrid()
		newGrid(numSquares);
	} else {
		refreshGrid()
	};
};

$(document).ready(function() {
	newGrid(16);
		
	$(".grid").on("mouseenter", function() {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background-color", "#" + randomColor);
	});
	
	$(".button").on("click", function() {
		refreshGrid();
		
		$(".grid").on("mouseenter", function() {
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			$(this).css("background-color", "#" + randomColor);
		});
	});
});