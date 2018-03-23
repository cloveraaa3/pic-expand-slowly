 window.onload=function(){
	var word=document.getElementsByTagName('p')[0];
	var small_pic=document.getElementById("small_pic");
	var big_pic=document.getElementById('big_pic');
	small_pic.height=200;
	small_pic.onmouseover=function(){
		small_pic.height=200;
		var height=small_pic.height;
		bianda(height);
		
		
	}
	function bianda(height){
		var i=0;
		var myVar=setInterval(function(){i++;height++;word.innerHTML=height;small_pic.height=height;if(i==50){clearInterval(myVar);}},10);
		

	}
	
	
	

	
}
	

