// Created by RaymondAndre

// Created by Sadegh Salari

//دستورات صفحه ی ثبت نام ==========
	
function signup(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	var user1= document.getElementById("username1");
	var pass1= document.getElementById("password1");

	if(user.value.length>2 && pass.value.length>2)
	{ document.getElementById("signup").style.display="none";
	  document.getElementById("signin").style.display="block";
	}
	else
	{ 
	alert("Username and Password is too short");
	}
}

function success(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	var user1= document.getElementById("username1");
	var pass1= document.getElementById("password1");
	
	if(user.value===user1.value && pass.value===pass1.value){
		document.getElementById("signin").style.display="none";
		document.getElementById("instagramLink").style.display="block";
	}else{
		alert ("Sorry i cont find you");
		document.getElementById("back").style.display="block";
	}
}

function goBack(){
	document.getElementById("signup").style.display="block";
	document.getElementById("signin").style.display="none";

}
