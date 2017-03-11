
//var srcArray = new Array();
//var counter = 1; 
var force = false;
var currentImg = 1;
var rowImgPlus1=6;
var counter =5;
//var pict = new Image();//object IMAGE initialized and assigned to variable

function imageLoad(){
	
	var myImg=document.getElementById("img1");	
	
	var pict = new Image();//object IMAGE initialized and assigned to variable
	
	
	//calculating modulus
	var mod = currentImg % rowImgPlus1;
	console.log('currentImg: '+currentImg);
	console.log("modulus: "+mod);
	
	
	if(mod !=0 || force ){
		var success = function(){
			myImg.appendChild(pict);
			currentImg++;
			imageLoad();						
		}		
	}	
	
	pict.className="click_off";
	
	pict.onclick = function(){		
		this.className="click_on";
		turnOFF();
		document.getElementById("msg").innerHTML = "Image description.";
	}
	
	pict.onerror = function(){
		document.getElementById("button").style.display="none";
		document.getElementById("msg").innerHTML = "The image could not be loaded.";
	}
		pict.onload = success;
		pict.src = currentImg < 10?//if else short cut notation
			"./img/0"+currentImg+".jpg": "./img/"+currentImg+".jpg";	
}		

function turnOFF(){
	var imgO = document.createElement('IMG');	
	imgO.className="click_off";
}

 function loadMore(force){
	 force = true;//set the paraeter to TRUE
	 rowImgPlus1+=counter; //adds another row of 5
	 imageLoad();
 }
	



