
var srcArray = new Array();
var currentImg = 1;
var rowImg=5;

function imageLoad(){
	
	var myImg = document.getElementById("img1");	
	
		for(var i = currentImg; i < rowImg+currentImg; i++){		
						
			var pict = document.createElement('IMG');
		
			if(i<10){					
				srcArray[i] = "./img/0"+i+".jpg";				
			}
			else {srcArray[i] = "./img/"+i+".jpg";}					
			pict.src = srcArray[i];				
			
			myImg.appendChild(pict);			
		}
		
	pict.onerror = function() {
				
		this.parentNode.removeChild(this);			
	};			
			
	currentImg=i;
}

 