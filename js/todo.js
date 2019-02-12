var item = [];
var newitem = "";
var editval = "";
const ENTER = 13;
const SPACEBAR = 32;

function befinished(event) {
	// 	Event.target.cl= "item_finished";
	// 	Event.target.innerHTML += "已完成";
	var flag = event.target.getAttribute("name");
	if (flag == "false") {
		event.target.setAttribute("class", "item_finished");
		event.target.setAttribute("name", true);
	} else {
		event.target.setAttribute("class", "item_todo");
		event.target.setAttribute("name", false);
	}

}

function itemchange(event) {
	var li_id = event.target.getAttribute("id");
	var li = document.getElementById(li_id);
	// li.setAttribute("style", "display:block");
	var val = li.innerText;
	var tempitem = document.createElement("input");
	tempitem.setAttribute("id", "item_change");
	tempitem.setAttribute("type", "text");
	tempitem.setAttribute("value", val);
	tempitem.onkeydown = edititems;
	li.appendChild(tempitem);
	item[li.value] = editval;
	li.innerText = editval;
}

function edititems(event) {
	var e = event.keyCode;
	if (e == ENTER || e == SPACEBAR) {
		var changebtn = document.getElementById("item_change");
		editval = changebtn.value;
		// changebtn.setAttribute("style", "display:none");
	}
}

function toitems() {
	var items = document.getElementById("item")
	var tempitem = document.createElement("li");
	tempitem.setAttribute("class", "item_todo");
	tempitem.setAttribute("id", "items" + item.length);
	tempitem.setAttribute("name", "false");
	tempitem.setAttribute("style", "display:block");
	tempitem.onclick = befinished;
	tempitem.ondblclick = itemchange;
	//	tempitem.addEventListener('click', befinished, false);
	tempitem.innerHTML = newitem;
	document.getElementById("item").appendChild(tempitem);
	var del = document.createElement("button");
	del.setAttribute("id", "del"+ item.length);
	var t = document.createTextNode("DELETE");
	del.appendChild(t);	
	del.onclick = delitems;
	document.getElementById("item").appendChild(del);
}
function delitems (event){
	
}

function btn_additems() {
	newitem = document.getElementById("input").value;
	item.push(newitem);
	toitems();
	document.getElementById("input").value = "";
}

function additems() {
	var e = event.keyCode;
	if (e == ENTER || e == SPACEBAR) {
		newitem = document.getElementById("input").value;
		item.push(newitem);
		toitems();
		document.getElementById("input").value = "";
	}
}

function saveData(type, item) {
	window.localStorage.setItem(type, JSON.stringify(item));
}

function getData(type) {
	return JSON.parse(localStorage.getItem(type));
}
