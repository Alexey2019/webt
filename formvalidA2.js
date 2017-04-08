
function validateForm(){

	// Make quick references to our fields
	var usernameInput = document.forms["regForm"]["usernameText"].value;
	var passwordInput = document.forms["regForm"]["passwordText"].value;
	var emailInput = document.forms["regForm"]["emailText"].value;
	var dayInput = document.forms["regForm"]["dayText"].value;
	var monthInput = document.forms["regForm"]["monthText"].value;
	var yearInput = document.forms["regForm"]["yearText"].value;

	//--to check empty Registration form fields--
    if(usernameInput == "" || passwordInput == "" || emailInput == ""|| dayInput == "" || monthInput == "" ||
          yearInput == ""){
    	document.getElementById("mandat").style.visibility = "visible";
		document.getElementById('mandat').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
		//return false;
	}else document.getElementById("mandat").style.visibility = "hidden"; //return true;

	// Check each input in the order that it appears in the form!
     if(allLetters(usernameInput, "* For your name please use alphabets only *")){
     	if(validPassword(passwordInput, "* Please enter a valid password *")){ 
     		if(validEmail(emailInput, "* Please enter a valid email address *")){
     			if(validDay(dayInput, "* Please enter valid day *")){
     				if(validMonth(monthInput, dayInput, "* Please enter valid month or Check number of days in the month *")){
     					if(validYear(yearInput, monthInput, dayInput, "* Please enter valid year or check if leap year *")){
     						onSubmit();
     						return true;

     					}//validYear
     				}//validMonth
     			}//validDay
     		}//validEmail	
     	}//validPassword 4 conditions: uppercase, lowercase, number and length
     }//allLetters
     return false;	
}//validateForm

//checks if all characters entered are letters
//function that checks whether input text is an alphabetic character or not.
function allLetters(usernameInput, alertMsg){	
	var letters = /^[A-Za-z]+$/;  
      if(usernameInput.match(letters)){       
       // alert('Your name input have accepted'); 
        document.getElementById("p1").style.visibility = "hidden";
        return true;  
      }  
      else{  
      	//alert("Username NOT accepted");
      	document.getElementById("p1").style.visibility = "visible";
        document.getElementById("p1").innerText = alertMsg;
        return false;  
      }  
}//allLetters

//checks if email input is valid
function validEmail(emailInput, alertMsg){
	 var eCharacters = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	 if(emailInput.match(eCharacters)) {       
       document.getElementById("p3").style.visibility = "hidden";
       return true;  
       }  
       else{
       	document.getElementById("p3").style.visibility = "visible";
        document.getElementById("p3").innerText = alertMsg;
        // emailInput.focus();
       return false;  
       }  
}//validEmail


function validPassword(passwordInput, alertMsg){
	var pCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,40}$/;

	//(/^
	//(?=.*\d)			-should contain at least one digit
	//(?=.*[a-z])		-should contain at least one lower case
	//(?=.*[A-Z])		-should contain at least one upper case
	//[a-zA-Z0-9]{6,}	-should contain at least 6 from (to 40) the mentioned characters
	//$/)

	if(passwordInput.match(pCharacters)) {
		document.getElementById("p2").style.visibility = "hidden";
		return true;
	}else{
		document.getElementById("p2").style.visibility = "visible";
		document.getElementById('p2').innerText = alertMsg; //this segment displays the validation rule for username
		//inputtext.focus();
		return false;
	}
}//validPassword

var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth()+1;
var currentDay = date.getDate();

//function that checks year format
function validYear(yearInput, monthInput, dayInput, alertMsg){
  var digitExp = /^(19|20)\d{2}$/; 
  if(yearInput.match(digitExp) && yearInput <= currentYear ) {

    //alert("YEAR FORMAT OK 1");
    // document.getElementById('p4').style.visibility = "hidden";
    //return true;
    }else {
    //alert("WRONG YEAR FORMAT");
    document.getElementById('p4').style.visibility = "visible";
    document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for day
    //dayInput.focus();
    return false;
	}
	if(yearInput==currentYear){
		if(currentMonth == monthInput){
			if(currentDay < dayInput) {//alert("Day exceed todays");
			document.getElementById('p4').style.visibility = "visible";
    		document.getElementById('p4').innerText = "Day input value exceed todays"; //this segment displays the validation rule for day
			return false;
			}
		}
		if(currentMonth < monthInput){alert("Month value exceed this month");
		document.getElementById('p4').style.visibility = "visible";
    	document.getElementById('p4').innerText = "Month input value exceed current month"; //this segment displays the validation rule for day
		return false;
		}
	}

    if(monthInput == 2 && dayInput == 29){
  		if ((!(yearInput % 4) && yearInput % 100) || !(yearInput % 400)) {    
      
        //alert("LEAP DATE FORMAT OK");
        document.getElementById('p4').style.visibility = "hidden";
        return true;
      }else 
    //alert("WRONG YEAR FORMAT");
    document.getElementById('p4').style.visibility = "visible";
    document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for day
    //dayInput.focus();
    return false;
  	} 
  	//alert("YEAR FORMAT OK 10");
  return true;
}//validYear

//function that checks month format
function validMonth(monthInput, dayInput, alertMsg){
  var ListofDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daysInMonth = ListofDays[monthInput-1];
  
  var digitExp = /^(0[1-9]|1[0-2])+$/; // /^(0[1-9]|1[0-2])\  /(0[1-9]|1\d|2\d|3[01])\  /(19|20)\d{2}$/ 
  if(monthInput.match(digitExp) && dayInput <= daysInMonth){
  	
    //alert("MONTH FORMAT OK");
    document.getElementById('p4').style.visibility = "hidden";
    return true;
  }else{
    //alert("WRONG MONTH FORMAT");
    document.getElementById('p4').style.visibility = "visible";
    document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for day
    //dayInput.focus();
    return false;
	}

}//validMonth

//function that checks day format
function validDay(dayInput, alertMsg){
  var digitExp = /^(0[1-9]|1\d|2\d|3[01])+$/; 
  if(dayInput.match(digitExp)){
    //alert("DAY FORMAT OK");
    document.getElementById('p4').style.visibility = "hidden";
    return true;
  }else
    //alert("WRONG DAY FORMAT");
    document.getElementById('p4').style.visibility = "visible";
    document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for day
    //dayInput.focus();
    return false;
}//validDay

function validateForm2(){

	var usernameInput2 = document.forms["loginForm"]["usernameText2"].value;
	var passwordInput2 = document.forms["loginForm"]["passwordText2"].value;

	//--to check empty Login form fields--
    if(usernameInput2 == "" || passwordInput2 == ""){
		document.getElementById('mandat2').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
		
	}else document.getElementById("mandat2").style.visibility = "hidden";

	 if(allLetters2(usernameInput2, "* For your name please use alphabets only *")){
     	if(validPassword2(passwordInput2, "* Please enter a valid password *")){ 
     		return true;
     	}//validPassword2. 4 conditions: uppercase, lowercase, number and length
     }//allLetters2
     return false;
}//validateForm2

	//checks if all characters entered are letters
//function that checks whether input text is an alphabetic character or not.
function allLetters2(usernameInput2, alertMsg){	
	var letters = /^[A-Za-z]+$/;  
      if(usernameInput2.match(letters)){       
        //alert('Your name input have accepted'); 
        document.getElementById("p5").style.visibility = "hidden";
        return true;  
      }  
      else{  
      	//alert("Username NOT accepted");
      	document.getElementById("p5").style.visibility = "visible";
        document.getElementById("p5").innerText = alertMsg;
        return false;  
      }  
}//allLetters

function validPassword2(passwordInput2, alertMsg){
	var pCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,40}$/;
	
	if(passwordInput2.match(pCharacters)) {
		document.getElementById('p6').style.visibility = "hidden";
		return true;
	}else{
		document.getElementById('p6').style.visibility = "visible";
		document.getElementById('p6').innerText = alertMsg; //this segment displays the validation rule for username
		//inputtext.focus();
		return false;
	}
}//validPassword
	
function onSubmit(){ 
//alert("onSubmit is HERE"); 
  var form = document.regForm;//object document.form assigned to a variable form
  var json = [];//empty array initialized
  // Loop through all the form elements
  for (var i=0; i<form.length; i++) {
     //Make sure they're valid to be stored (i.e. checked, not a button)
    if (form.elements[i].name && (form.elements[i].checked
      || /select|textarea/i.test(form.elements[i].nodeName)
      || /text|password/i.test(form.elements[i].type))) {
      // Store them in an object association
      var entry = {};
      entry[form.elements[i].name] = form.elements[i].value;
      json.push(entry);
   console.log('form.elements[i].id: '+form.elements[i].id+": "+' form.elements'+[i]+'.value: '+form.elements[i].value);
     
    }
  }
  alert('JSON.stringify(json): '+JSON.stringify(json));
  setCookie("regForm",JSON.stringify(json));  
}

 var expirydays = 1;
 
function setCookie(c_name,value, expirydays){	
   var time = new Date();
   time.setTime(time.getTime()+(expirydays*30*1000));
   //time.setTime(time.getTime() + (days * 24 * 60 * 60 * 1000));
   var expires = "; expires="+time.toGMTString();
   console.log('CoockieName (in setCookie) is: '+ c_name + " CookieValue: " + value+expires);   
   document.cookie = c_name + "=" + value + expires+ "; path=/";   
}

function deleteCookie(c_name){
  setCookie(c_name,"",-1);
}

function getCookie(c_name){
        var nameEQ = name + "=",
            ca = document.cookie.split(';');//ca - cookie Array

        for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) 
              return  JSON.parse(c.substring(nameEQ.length,c.length));
        }

        return null;
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}


/*
function getCookie(c_name){ alert('cookie Name in getCookie is: '+c_name);
	if (document.cookie.length>0){
  		c_start=document.cookie.indexOf(c_name + "=");
  		console.log('(in getCookie)c_start: '+c_start+'c_end: '+c_end);

  		if (c_start!=-1){
    		c_start=c_start + c_name.length+1;
    		c_end=document.cookie.indexOf(";",c_start);
    		if (c_end==-1) c_end=document.cookie.length;
	
    		return unescape(document.cookie.substring(c_start,c_end));
    	}
 	 }
	return "";
}
*/
/*
function onLoad() {
  // load values from cookie
  var cookie = getCookie("myform");
 
  if(cookie.length > 1){
    var retval = JSON.parse(cookie);
    alert('retval.length: '+retval.length);
    for(var i=0;i<retval.length;i++) {
      var obj = retval[i];
      for(var key in obj){
        //alert('key: '+key+": "+'obj[key]: '+obj[key]);
        document.myform.elements[key].value = obj[key];
      }
    }
  }
}
*/