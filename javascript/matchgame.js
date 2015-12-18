function do_game(){
	
	var left_div = document.getElementById("leftside");
	var right_div = document.getElementById("rightside");
	left_div.style.position = "absolute";
	right_div.style.position = "absolute";
	left_div.style.width = "500px";
	left_div.style.height = "500px";
	right_div.style.height = "500px";
	right_div.style.width = "500px";
	
	var numberOfFaces = 5;
	generatefaces(numberOfFaces,left_div,right_div);

}

function generatefaces(numberOfFaces,left_div,right_div){

	for(var i=0;i<numberOfFaces;i++){
		var face = document.createElement("img");
		face.src="images/smile.png";
		face.style.position="absolute";
		var random1 = Math.floor(Math.random()*400);
		face.style.top = random1 + "px";
		var random2 = Math.floor(Math.random()*400);
		face.style.left = random2 + "px";
		left_div.appendChild(face);

	}

 	var leftSideImages = left_div.cloneNode(true);
	var last_child = leftSideImages.lastChild;
	last_child.parentNode.removeChild(last_child);
	right_div.appendChild(leftSideImages);

	var theBody = document.getElementById("the_body");
	theBody.onclick = function gameOver() {

    alert("Game Over!");


    theBody.onclick = null;

    left_div.lastChild.onclick = null;


	};
	
	left_div.lastChild.onclick=
    function nextLevel(event){

        event.stopPropagation();
        (function deleteFaces(){

			var i=0,j=0;
        	while(left_div.firstChild){
        		left_div.removeChild(left_div.firstChild);
        		i++;
        		console.log(i);
        	}
			while(right_div.firstChild){
        		right_div.removeChild(right_div.firstChild);
        		j++;
        		console.log(j);
        	}

	})();
        	
        numberOfFaces += 5;
        generatefaces(numberOfFaces,left_div,right_div); 
	 };
}
