var place;

function search(){
	place = document.getElementById("go").value;
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + place + '&APPID=e14b4cb410b59c24981c46fe3e32bfc7&units=metric';
	fetch(url)
      .then(  
		function(response) {  
                return response.json();
			
                })

            .then(function(data){ 
            		document.getElementById("place").innerHTML = place;
					document.getElementById("weather").innerHTML= data.weather[0].description;
					document.getElementById("maxtemp").innerHTML=data.main.temp_max;
					document.getElementById("mintemp").innerHTML=data.main.temp_min; 
			});
        } 


	
	
	
