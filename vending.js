var $ = function(id) { return document.getElementById(id); }

var myVendingMachine = new VendingMachine (2, 2, 2, 2, 2, 2);

var add_dollar = function(){
	myVendingMachine.deposit(1);
	update_display();
}

var add_quarter = function(){
	myVendingMachine.deposit(0.25);
	update_display();
}

var add_dime = function(){
	myVendingMachine.deposit(0.10);
	update_display();
}

var add_nickel = function(){
	myVendingMachine.deposit(0.05);
	update_display();
}

var refund = function(){
	$("message").textContent = "Please take your $" + myVendingMachine.get_amount().toFixed(2);
	myVendingMachine.refundAll();
	update_display();
}

var get_coke = function(){
	var coke = $("coke").value;
	var diffAmount = myVendingMachine.amountEnough();
	if(diffAmount < 0){
		$("message").textContent = "Please add $" + (0-diffAmount).toFixed(2) + " more to enjoy drink";
		return false;
		}
	myVendingMachine.dispense(coke);
	var refundAmount = myVendingMachine.refund();
	if(refundAmount > 0)
		$("message").textContent = "Please enjoy your Coke and take your $" + refundAmount.toFixed(2) + " change";
	else
		$("message").textContent = "Please enjoy your Coke.";
	if(!myVendingMachine.available(coke))
		$("coke").disabled = true;
	update_display();
	return true;
}

var get_dietCoke = function(){
	var dietCoke = $("dietcoke").value;
	var diffAmount = myVendingMachine.amountEnough();
	if(diffAmount < 0){
		$("message").textContent = "Please add $" + (0-diffAmount).toFixed(2) + " more to enjoy drink";
		return false;
		}
	myVendingMachine.dispense(dietCoke);
	var refundAmount = myVendingMachine.refund();
	if(refundAmount > 0)
		$("message").textContent = "Please enjoy your Diet Coke and take your $" + refundAmount.toFixed(2) + " change";
	else
		$("message").textContent = "Please enjoy your Diet Coke.";
	if(!myVendingMachine.available(dietCoke))
		$("dietcoke").disabled = true;
	update_display();
	return true;
}

var get_mountainDew = function(){
	var mountainDew = $("dew").value;
	var diffAmount = myVendingMachine.amountEnough();
	if(diffAmount < 0){
		$("message").textContent = "Please add $" + (0-diffAmount).toFixed(2) + " more to enjoy drink";
		return false;
		}
	myVendingMachine.dispense(mountainDew);
	var refundAmount = myVendingMachine.refund();
	if(refundAmount > 0)
		$("message").textContent = "Please enjoy your Mountain Dew and take your $" + refundAmount.toFixed(2) + " change";
	else
		$("message").textContent = "Please enjoy your Mountain Dew.";
	if(!myVendingMachine.available(mountainDew))
		$("dew").disabled = true;
	update_display();
	return true;
}

var get_drPepper = function(){
	var drPepper = $("pepper").value;
	var diffAmount = myVendingMachine.amountEnough();
	if(diffAmount < 0){
		$("message").textContent = "Please add $" + (0-diffAmount).toFixed(2) + " more to enjoy drink";
		return false;
		}
	myVendingMachine.dispense(drPepper);
	var refundAmount = myVendingMachine.refund();
	if(refundAmount > 0)
		$("message").textContent = "Please enjoy your Dr. Pepper and take your $" + refundAmount.toFixed(2) + " change";
	else
		$("message").textContent = "Please enjoy your Dr. Pepper.";
	if(!myVendingMachine.available(drPepper))
		$("pepper").disabled = true;
	update_display();
	return true;
}

var get_rootBeer = function(){
	var rootBeer = $("rootbeer").value;
	var diffAmount = myVendingMachine.amountEnough();
	if(diffAmount < 0){
		$("message").textContent = "Please add $" + (0-diffAmount).toFixed(2) + " more to enjoy drink";
		return false;
		}
	myVendingMachine.dispense(rootBeer);
	var refundAmount = myVendingMachine.refund();
	if(refundAmount > 0)
		$("message").textContent = "Please enjoy your Root Beer and take your $" + refundAmount.toFixed(2) + " change";
	else
		$("message").textContent = "Please enjoy your Root Beer.";
	if(!myVendingMachine.available(rootBeer))
		$("rootbeer").disabled = true;
	update_display();
	return true;
}

var get_water = function(){
	var water = $("water").value;
	var diffAmount = myVendingMachine.amountEnough();
	if(diffAmount < 0){
		$("message").textContent = "Please add $" + (0-diffAmount).toFixed(2) + " more to enjoy drink";
		return false;
		}
	myVendingMachine.dispense(water);
	var refundAmount = myVendingMachine.refund();
	if(refundAmount > 0)
		$("message").textContent = "Please enjoy your Water and take your $" + refundAmount.toFixed(2) + " change";
	else
		$("message").textContent = "Please enjoy your Water.";
	if(!myVendingMachine.available(water))
		$("water").disabled = true;
	update_display();
	return true;
}

var update_display = function () {
    $("deposit").value = myVendingMachine.amount.toFixed(2);
}

window.onload = function () {
    $("dollar").onclick = add_dollar;
    $("quarter").onclick = add_quarter;
    $("dime").onclick = add_dime;
    $("nickel").onclick = add_nickel;
    $("refund").onclick = refund;
    $("coke").onclick = get_coke;
    $("dietcoke").onclick = get_dietCoke;
    $("dew").onclick = get_mountainDew;
    $("pepper").onclick = get_drPepper;
    $("rootbeer").onclick = get_rootBeer;
	$("water").onclick = get_water;
	$("coke").disabled = false;
	$("dietcoke").disabled = false;
	$("dew").disabled = false;
	$("pepper").disabled = false;
	$("rootbeer").disabled = false;
	$("water").disabled = false;
	update_display();
}