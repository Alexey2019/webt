
var force = false;
var currentImg = 1;
var rowImgPlus1=6	;
var counter =5;

var sc = window.innerWidth;
var imgWidth = ((sc-10-(rowImgPlus1*12))/(rowImgPlus1-1));

function imageLoad(){
	
	var myImg=document.getElementById("img1");	
	
	var pict = new Image();//object IMAGE initialized and assigned to variable	
	
	
	pict.setAttribute('style', 'width:'+imgWidth+'px');
	
	//calculating modulus
	var mod = currentImg % rowImgPlus1;
	console.log('currentImg: '+currentImg);
	console.log("modulus: "+mod);
	console.log(imgWidth);		
	
	if(mod !=0 || force ){
		var success = function(){
			myImg.appendChild(pict);
			currentImg++;
			imageLoad();						
		}		
	}	
	pict.onload = success;
		pict.src = currentImg < 10?//if else shortcut notation
			"./img/0"+currentImg+".jpg": "./img/"+currentImg+".jpg";
		pict.alt = currentImg;
	
	pict.className="click_off";
			
	pict.onclick = function(){
		
		this.className="click_on";
		
		document.getElementById("msg").style.visibility="visible";
		document.getElementById("msg").innerHTML = "Image description "+ this.alt;
		cr=document.getElementById("cross");
		cr.src= 'cross.jpg';
		cr.style.visibility="visible";
		var previous = this.alt;
		previous.className="click_off";
		
		cr.onclick = function(){
			pict.parentNode.removeChild(pict);
			document.getElementById("msg").style.visibility="hidden";
			cr.style.visibility="hidden";
			
		}
		alert('previous: '+previous);
	}
	
	pict.onerror = function(){
		document.getElementById("button").style.display="none";
		document.getElementById("msg").innerHTML = "The image could not be loaded.";
	}
		
}		

function turnOFF(){
	var imgX = document.getElementsByTagName('IMG');	
}

 function loadMore(force){
	 force = true;//set the paraeter to TRUE
	 rowImgPlus1+=counter; //adds another row of 5
	 imageLoad();
 }
	



