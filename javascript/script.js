var place;
var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + place + '&APPID=e14b4cb410b59c24981c46fe3e32bfc7&units=metric';
function search(){
	place = document.getElementById("go").value;
	output();
}

function output(){
	document.getElementById("place").innerHTML = place;
}
fetch(url)
      .then(  
		function(response) {  
                return response.json();
			
                })

            .then(function(data){ document.getElementById("weather").innerHTML=data.coord.weather;
	
document.getElementById("maxtemp").innerHTML=data.main.maxtemp;,
	document.getElementById("mintemp").innerHTML=data.main.mintemp;}
	
	
	
