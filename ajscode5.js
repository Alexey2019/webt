
var srcArray = new Array();
var counter = 1; 
var force = false;
var currentImg = 1;
var rowImgPlus1=6;

function imageLoad(){
	
	var myImg=document.getElementById("img1");	
	
	var pict = new Image();
	
	//calculating modulus
	var mod = currentImg % rowImgPlus1;
	console.log(mod);
	
	
	if(mod !=0 || force ){
		var success = function(){
			myImg.appendChild(pict);
			currentImg++;
			imageLoad();
		}
	}	
		pict.onload = success;
		pict.src = currentImg < 10?//if else short cut nottation
			"./img/0"+currentImg+".jpg": "./img/"+currentImg+".jpg";	
	
}		

 function loadMore(force){
	 force = true;
	 alert('FORCE');
	imageLoad();
 }
	



