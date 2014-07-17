$(document).ready(function(){
	var BerlinClock = function(hours, minutes, seconds){
		var secLamp = [seconds % 2 === 0 ? "Y" : "O"];
		
		var redRow1 = ["O","O","O","O"];
		var redRow2 = ["O","O","O","O"];
		var yellowRow1 = ["O","O","O","O","O","O","O","O","O","O","O"];
		var yellowRow2 = ["O","O","O","O"];
		
		var redHours = Math.floor(hours / 5);
		var yellowMinutes = Math.floor(minutes / 5);
				
		for(var i = 0; i < redHours; i++){redRow1[i] = "R";}
		for(var i = 0; i < hours - redHours * 5; i++){redRow2[i] = "R";}
		for(var i = 0; i < yellowMinutes; i++){yellowRow1[i] = (i + 1) % 3 === 0 ? "R" : "Y";}
		for(var i = 0; i < minutes - yellowMinutes * 5; i++){yellowRow2[i] = "Y";}

		var berlinClock = [secLamp, redRow1, redRow2, yellowRow1, yellowRow2];
		
		for(var i = 0; i < berlinClock.length; i++){			
			for(var j = 0; j < berlinClock[i].length; j++){
				if(berlinClock[i][j] === "R"){$("#" + i + "_" + j).addClass("red");}
				else if(berlinClock[i][j] === "Y"){$("#" + i + "_" + j).addClass("yellow");}
				else {$("#" + i + "_" + j).removeClass("red").removeClass("yellow")};
			}
		}
	};

	setInterval(function(){
		var time = new Date();

		BerlinClock(time.getHours(), time.getMinutes(), time.getSeconds());
	}, 1000);
});