var place;
function search(){
	place = document.getElementById("go").value;
	output();
}

function output(){
	document.getElementById("place").innerHTML = place;
}