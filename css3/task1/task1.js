function $(id){
	return document.getElementById(id)
}

$("img_action").addEventListener("mouseover",function(){
	$("container").innerHTML = $("container").innerHTML + '<div class="text_container"><p class="text">CSS3 TASK ONE !</p></div>'
},false)



