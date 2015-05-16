$(document).ready(function(){

	rows = 15;
	columns = 15;
	option = 'black';

	createGrid (rows, columns);



	$('#button').click(function(){

		$('.little').remove();
		rows=prompt("Please enter the number of rows");
		columns=prompt("Please enter the number of columns");
		console.log(rows);
		console.log(columns);
		createGrid (rows, columns);

	});


	if(option == 'colors'){
		$('.little').mouseover(function(){

			$(this).css("background-color",randomColor());

		});

		$('.little').mouseout( function(){

		});
	}
	else {
		$('.little').mouseover(function(){

			$(this).addClass('blacked');
			console.log("hola");

		});

		$('.little').mouseout( function(){

		});
	}
});



function randomColor(){
	return newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

function createGrid(rows, columns){

	for (var i = 1; i <= rows; i++) {
		for (var j = 1; j <= columns; j++) {
        	$("#container").append("<div class ='little' 'id='" + i + j + "'></div>");
        }
    } 
    $('.little').height("30px");
	$('.little').width("30px");
	$(".little").css("margin","3px");

	$('#container').height($('.little').outerHeight(true)*columns);
	$('#container').width($('.little').outerWidth(true)*rows);
}

