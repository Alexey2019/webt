
var srcArray = new Array();

var currentImg = 1;
var rowImg=5;
function imageLoad(id){
	
	var myImg=document.getElementById("img1");
	
		for(var i = currentImg; i < rowImg+currentImg; i++){
		
			var pict = window.document.createElement('IMG');
		 
				if(i<10){							
					srcArray[i] = "./img/0"+i+".jpg";
				}
				else {srcArray[i] = "./img/"+i+".jpg";}
			try{	
				pict.src = srcArray[i];
			}
			catch(e)
			{	
			debugger;
			break;		
			}
			console.log(srcArray[i]);//prints out in console the source of array
			myImg.appendChild(pict);
		}
		currentImg=i;
}		
	



