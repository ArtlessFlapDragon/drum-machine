// function add(num1, num2) {
// 	return num1 + num2;
// }

// function subtract(num1, num2) {
// 	return num1 - num2;
// }

// function multiply(num1, num2) {
// 	return num1 * num2;
// }

// function divide(num1, num2) {
// 	return num1 / num2;
// }

// function calculator(num1, num2, operator) {
// 	return operator(num1, num2);
// }

// calculator(6, 7, multiply)

// function HouseKeeper(name,age,experience,hasWorkPermit) {
// 	this.name = name;
// 	this.age = age;
// 	this.experience = experience;
// 	this.hasWorkPermit = hasWorkPermit;
// }

// let Hk2 = new HouseKeeper("Lyn",29,5,true);
// let Hk3 = new HouseKeeper("Julie", 21,2,false);
// let Hk4 = new HouseKeeper("Anna",43,8,true);

let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (i = 0; i < numberOfDrumButtons; i++) {

	document.querySelectorAll('.drum')[i].addEventListener('click', function () {

		let buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);

	}
	)}

document.addEventListener("keypress", function (event) {

	makeSound(event.key);

	buttonAnimation(event.key);

});

function makeSound(key) {

	switch (key) {

		case "w":
			let tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;

		case "a":
			let tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			let tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			let tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			let snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			let bass = new Audio("sounds/kick-bass.mp3");
			bass.play();
			break;

		case "l":
			let cymbal = new Audio("sounds/crash.mp3");
			cymbal.play();
			break;

		default: console.log(buttonInnerHTML);


	}
}


function buttonAnimation(currentKey) {

	let activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function () {

		activeButton.classList.remove("pressed");

	}, 100);

}
