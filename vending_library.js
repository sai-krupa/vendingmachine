
var VendingMachine = function(coke, dietCoke, mountainDew, drPepper, rootBeer, water){
	this.coke = coke;
	this.dietCoke = dietCoke;
	this.mountainDew = mountainDew;
	this.drPepper = drPepper;
	this.rootBeer = rootBeer;
	this.water = water;

	this.amount = 0;
}

VendingMachine.prototype.deposit = function(amount){
	this.amount += amount;
	return this.amount;
}

VendingMachine.prototype.get_amount = function(){
	return this.amount;
}

VendingMachine.prototype.dispense = function(drinkType){
	if(drinkType == 'Coke')
		this.coke -= 1;
	else if(drinkType == 'Diet Coke')
		this.dietCoke -= 1;
	else if(drinkType == 'Mountain Dew')
		this.mountainDew -= 1;
	else if(drinkType == 'Dr. Pepper')
		this.drPepper -= 1;
	else if(drinkType == 'Root Beer')
		this.rootBeer -= 1;
	else if(drinkType == 'Water')
		this.water -= 1;
}

VendingMachine.prototype.refundAll = function(){
	this.amount = 0;
}

VendingMachine.prototype.available = function(drinkType){
	if(drinkType == 'Coke')
		return this.coke > 0;
	else if(drinkType == 'Diet Coke')
		return this.dietCoke > 0;
	else if(drinkType == 'Mountain Dew')
		return this.mountainDew > 0;
	else if(drinkType == 'Dr. Pepper')
		return this.drPepper > 0;
	else if(drinkType == 'Root Beer')
		return this.rootBeer > 0;
	else if(drinkType == 'Water')
		return this.water > 0;
}

VendingMachine.prototype.amountEnough = function(){
	return this.amount - 0.75;
}

VendingMachine.prototype.refund = function(){
	var refundAmount = this.amount - 0.75
	this.amount = 0;
	return refundAmount;
}

