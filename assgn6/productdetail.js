var total = 0; //total amount
var amtSelected = false; //check if amount has been selected
var glazeSelected = false;

function selectAmount(item) {

	var numBuns = Number(item);

	if (amtSelected === false) {
		console.log('checked');
		item.parentNode.style.backgroundColor = "#eb8d2f";
		item.style.color = "white";
		amtSelected = true; //can't click on another item if one is already selectred?
		console.log(Number(item)); // ???????????????????????????????????????????????/
	}
	else {
		item.parentNode.style.backgroundColor = "white";
		item.style.color = "black";
		amtSelected = false;
		console.log('UNCHECKED');
	}
	updateTotal(numBuns);

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
	total = 2 * item;
}