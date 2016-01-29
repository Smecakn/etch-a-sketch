function newGrid(x){
	for (var row = 1; row <= x; row++){
		for (var col = 1; col <= x; col++){
			$("#container").append("<div class='grid'></div>");	
		};
	};
	$(".grid").width(960/x);
	$(".grid").height(960/x);
};

$(document).ready(function() {
	newGrid(16);
	
	$(".grid").on("mouseenter", function() {
		$(this).css({"background-color": "#000"});
	});
});