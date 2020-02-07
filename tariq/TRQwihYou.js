var slider;
var pages = []; 
var buttons = [];
var pageToShow = 0;
var textToCopy = '<link rel="stylesheet" href="https://soft-ui.web.app/soft-ui.css">';
window.onload = () => {
  slider = document.getElementsByClassName("slider");
  for(var i = 0; i<=slider.length-1; i++){
	  pages[i] = slider[i].getElementsByClassName("pages")[0];
	  
	  for (var j = 0; j <= pages[i].getElementsByClassName("page").length-1; j++){
		  if(j != pageToShow){
	   pages[i].getElementsByClassName("page")[j].style.display = "none";
		  }
	  }
	  
	  buttons[i] = slider[i].getElementsByClassName("buttons")[0];
	  for (var j = 0; j <= buttons[i].getElementsByTagName("button").length-1; j++){
	buttons[i].getElementsByTagName("button")[j].id = i + "_" + j;
	  }
  }
}

var slide = (el) => {
	
	  
	  
	  for (var i = 0; i <= pages[el.id.split("_")[0]].getElementsByClassName("page").length-1; i++){
	  
	   pages[el.id.split("_")[0]].getElementsByClassName("page")[i].style.display = "none";
		  
	  }
	  
	  
		 pages[el.id.split("_")[0]].getElementsByClassName("page")[el.id.split("_")[1]].style.display = "";
	  
}

var openMenu = () => {
	document.getElementsByClassName("drop")[0].style.bottom = "0";
	document.getElementsByClassName("close")[0].style.right = "20px";
}

var closeMenu = () => {
	document.getElementsByClassName("drop")[0].style.bottom = "-100px";
	document.getElementsByClassName("close")[0].style.right = "-100px";
}

const copyToClipboard = str => { const el = document.createElement('textarea'); el.value = str; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el); };


