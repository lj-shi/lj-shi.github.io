var total = 0;
var amtSelected = false; //check if amount has been selected
var glazeSelected = false;

function selectAmount(item) {

	if (amtSelected === false) {
		item.parentNode.style.backgroundColor = "#eb8d2f";
		item.style.color = "white";
		amtSelected = true; //can't click on another item if one is already selectred
		var amount = document.getElementById(item.id).innerHTML; // get the text from amount selected and convert to number
		console.log(parseInt(amount));
	}
	else {
		item.parentNode.style.backgroundColor = "white";
		item.style.color = "black";
		amtSelected = false;
		var amount = 0;
	}

	var total = updateTotal(amount);
	console.log("hello" + JSON.parse(localStorage.getItem("total")));
	displayAmount();

}

function displayAmount() {
	var plswork = getTotal();
	document.getElementById("totalamt").textContent = "Total: $" + plswork;
}

function selectGlaze(item) {

	if (glazeSelected === false) {
		item.parentNode.style.backgroundColor = "#eb8d2f";
		item.style.color = "white";
		glazeSelected = true;
	}
	else {
		item.parentNode.style.backgroundColor = "white";
		item.style.color = "black";
		glazeSelected = false;
	}		
}

function updateTotal(item) {
	var total = 2 * item;
	localStorage.setItem("total", JSON.stringify(total));
	return total;
}

function getTotal() {
	return JSON.parse(localStorage.getItem("total"));

}

function cartAmount() {
	console.log("hello");
	var cartamt = getTotal();
	document.getElementById("finalAmt").textContent = "$" + cartamt + ".00";
}

window.onload = function() {
	console.log("help me");
	cartAmount();
}

function displayEmpty() {
	var plswork = getTotal();
	document.getElementById("finalAmt").textContent = "$" + plswork + ".00";
}

function removeCart(int) {
	console.log("before changing it to" + JSON.parse(localStorage.getItem("total")));
	var total = 0;
	localStorage.setItem("total", JSON.stringify(total));
	console.log("i need major help" + JSON.parse(localStorage.getItem("total")));
	displayEmpty();
}

