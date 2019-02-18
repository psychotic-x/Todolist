var item = [];
var newitem = "";
var editval = "";
const ENTER = 13;
const SPACEBAR = 32;
var  i = 0;
var $ = document.querySelector.bind(document);

function befinished(event) {
	// 	Event.target.cl= "item_finished";
	// 	Event.target.innerHTML += "已完成";
	var flag = event.target.getAttribute("name");
	if (flag === "false") {
		event.target.setAttribute("class", "item_finished");
		event.target.setAttribute("name", true);
	} else if (flag === "true"){
		event.target.setAttribute("class", "item_todo");
		event.target.setAttribute("name", false);
	}

}

function itemchange(event) {
	let li=event.target;
	let str=li.innerText;
	li.innerHTML="<input />";
	li.querySelector("input").setAttribute("value", str);
	li.querySelector("input").setAttribute("name", "item_input");
	li.querySelector("input").addEventListener("keydown",e=>{
		if(e.code==="Enter"){
			li.innerHTML=li.querySelector("input").value;
		}
	});
}

function edititems(event) {
	var e = event.code;
	if (e == "ENTER" || e == "SPACEBAR") {
		var changebtn = document.getElementById("item_change");
		editval = changebtn.value;
		// changebtn.setAttribute("style", "display:none");
	}
}

function toitems(todovalue) {
	let tempitem = document.createElement("li");
	tempitem.setAttribute("class", "item_todo");
	tempitem.setAttribute("id", "items" + i);
	tempitem.setAttribute("name", "false");
	tempitem.setAttribute("style", "display:block");
	tempitem.onclick = befinished;
	tempitem.ondblclick = itemchange;
	//	tempitem.addEventListener('click', befinished, false);
	tempitem.innerHTML = todovalue;
	document.getElementById("item").appendChild(tempitem);
	let del = document.createElement("button");
	del.setAttribute("id", "del"+ i);
	let t = document.createTextNode("DELETE");
	del.appendChild(t);
	del.onclick = delitems;
	document.getElementById("item").appendChild(del);
	i++;
}
function delitems (event){
	// event.target.previousElementSibling.remove();
	let el = event.target.previousElementSibling;
	let p = event.target.parentElement;
	p.removeChild(el);
	p.removeChild(event.target);
	// event.target.remove();

}

function btn_additems() {
	newitem = document.getElementById("input").value;
	toitems(newitem);
	document.getElementById("input").value = "";

}

function additems() {
	var e = event.keyCode;
	if (e == ENTER || e == SPACEBAR) {
		btn_additems();
	}
}

function saveData(type,item) {
	window.sessionStorage.setItem(type, JSON.stringify(item).toString());
}

function getData(type) {
	return JSON.parse(sessionStorage.getItem(type));
}

function save() {
	window.sessionStorage.clear();
	let item = [];
	let todo = $("item");
	var todolist = document.querySelectorAll("li");
	let length = todolist.length;
	for (let i = 0;i < length; i ++)
	{
		  item[i] = todolist[i].innerHTML;
	}
	window.sessionStorage.setItem("type", JSON.stringify(item));
}
function paint() {

	item =getData("type");
	if( item.length !== 0)
	{
		for(let i = 0; i < item.length; i ++)
		{
			toitems(item[i]);
		}
	}
}
