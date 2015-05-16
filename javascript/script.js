$(document).ready(function(){

	rows = 10;
	columns = 10;
	option = 'colors';

	createGrid (rows, columns);



	$('#button').on("click", function(){

		$('.little').remove();
		rows=prompt("Please enter the number of rows");
		columns=prompt("Please enter the number of columns");
		createGrid (rows, columns);

	});


	if(option == 'colors'){
		$("#container").on("mouseover", ".little", function(){
		  $(this).css("background-color",randomColor());
		});

	}
	else {

		$("#container").on("mouseover", ".little", function(){
		  $(this).addClass('blacked');
		});
	}

});



function randomColor(){
	return newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

function createGrid(rows, columns){

	for (var i = 1; i <= rows; i++) {
		for (var j = 1; j <= columns; j++) {
        	//$("#container").append("<div class ='little' 'id='" + i + j + "'></div>");
        	$("#container").append("<div class ='little'></div>");
        }

    } 
    $('.little').height("30px");
	$('.little').width("30px");
	$(".little").css("margin","3px");

	$('#container').height($('.little').outerHeight(true)*columns);
	$('#container').width($('.little').outerWidth(true)*rows);
}

