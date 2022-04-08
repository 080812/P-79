menu=["Itlian pizza","chesse pizza","mexcican pizza","panner pizza"];
function getmenu(){
	var data;
	data="<ol class='menulist'>";
	menu.sort();
	for(i=0;i<menu.length;i++){
		data=data+'<li>'+menu[i]+'</li>';
	}
	data=data+"</ol>";
	document.getElementById("display_menu").innerHTML=data;
}

function add_item(){
	var data;
	item=document.getElementById("add_item").value;
menu.push(item);
menu.sort();
data="<section class='menulist'>";
for(i=0;i<menu.length;i++){
	data=data+'<div>'+menu[i]+'</div>';
}
data=data+"</section>";
document.getElementById("display_addedmenu").innerHTML=data;
}