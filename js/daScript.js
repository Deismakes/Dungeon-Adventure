
var goldKey = false, goldKey2 = true, goldKey3 = true;
var pickupKey, chamber1, chamber2, cantPass, cantPassReason;

/* START Stages Reveal */

function stage0Reveal() {
	room0();
	stage0.style.display = "block";
}//end stage 1 reveal

function stage1Reveal() {
	room1();
	proceedBTN.style.display = "none";
	stage1.style.display = "block";
}//end stage 1 reveal

function stage2Reveal() {
	if(goldKey == 0) {
		alert(cantPass);
	} else {
		message.innerHTML = "You discover a hallway. Moving through you see two doors; <br>which would you like to open?";
		stage2.style.display = "block";
		cantPassReason = "inHall";
		doorClick();
		goldKey = false;
	}
}//end stage 2 reveal

function stage3Reveal(){
	if(goldKey == 0) {
		alert(cantPass);
	} else {
		message.innerHTML = "You discover a hallway. Moving through you see many doors; <br>which would you like to open?";
		stage3.style.display = "block";
		cantPassReason = "inHall";
		doorClick();
		goldKey = false;
	}
}//end stage 3 reveal

/* START Rooms */

function room0() {
	messageBox.className += " w3-card-4";
	messageBox.style = "margin: auto; width: 85%; height: 160px; background-color: #e6e6e6";
	message.style = "text-align: center; padding-top: 20px";
	message.innerHTML = "You find yourself moving down a stairway entrance.";
	proceedBTN.style.display = "block";
	stages.style.backgroundColor = "#d9d9d9";
	stages.className += " w3-card-4";
	stagesHeight.innerHTML = "#stages{height: 1200px !important;}";
}//end room 0

function room1() {
	message.innerHTML = "You've entered into a large stone room, and are now surrounded by four doors.<br>Which would you like to open?";
	pickupKey = prompt("You see a gold key on the ground. Would you like to pick it up?").toUpperCase();
	if(pickupKey === "YES") {
		goldKey = 1;
		alert("You place the gold key into your inventory belt.");
	} else {
		alert("You leave the gold key on the ground.");
		cantPassReason = "noKey";
		doorClick();
	}

}//end room 1

function room2() {
	if(goldKey == 0) {
		alert(cantPass);
	} else {
		endlessPit.style.display = "block";
		message.innerHTML = "The floor disappears from beneath you and you fall into a deep pit. You have died.";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 2

function room3() {
	if(goldKey == 0) {
		alert(cantPass);
	} else {
		magicMouth.style.display = "block";
		message.innerHTML = "The floor beneath you opens up, revealing a giant magical mouth which eats you. You have died.";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 3

function room4() {
	if(goldKey2 == 0) {
		alert(cantPass);
	} else {
		portalOutsideHall.style.display = "block";
		portalOutside.style.display = "block";
		message.innerHTML = "You walk down a stairway and through a portal, which transports you outside. You are free from the dungeon.";
		cantPassReason = "outside";
		doorClick();
		gameOver();
	}
}//end room 4

function room5() {
	if(goldKey2 == 0) {
		alert(cantPass);
	} else {
		doorTreasure.style.display = "block";
		hallwayTreasure.style.display = "block";
		portalOutside2.style.display = "block";
		message.innerHTML = "You have discovered the treasure room! After collecting the treasure, you walk through a portal and find yourself transported outside. You are rich and free from the dungeon.";
		cantPassReason = "outside";
		doorClick();
		gameOver();
	}
}//end room 5

function room6() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter the room and are sent to the ninth plane of hell. You are dead.";
		ninthPlane.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 6

function room7() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter the room and are sent to the tenth plane of hell. You are dead.";
		tenthPlane.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 7

function room8() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter and the room suddenly fills with fire. You are dead.";
		fireTrap.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 8

function room9() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter a large room, which suddenly fills with poisonous gas. You are dead.";
		shortHall.style.display = "block";
		gasTrap.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 9

function room10() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter a room with a stone fire-pit at its center. As you move closer the door disappears behind you. Suddenly fire begins pouring onto the ground and grows, filling the room. You are dead.";
		message.style = "text-align: center;";
		russRoul.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 10

function room11() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter the room and are sent to the sixth plane of hell. You are dead.";
		sixthPlane.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 11

function room12() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You step into a dark room and fall down a deep pit until you are impaled by spikes at its bottom. You are dead.";
		spikedPit.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 12

function room13() {
	if(goldKey3 == 0){
		alert(cantPass);
	} else {
		message.innerHTML = "You enter the room and are sent to heaven. You are dead, but free.";
		heaven.style.display = "block";
		cantPassReason = "dead";
		doorClick();
		gameOver();
	}
}//end room 13

/* Other Functions */

function doorClick(){
	switch(cantPassReason) {
		case "noKey":
			cantPass = "The door is locked and you have no key.";
		break;
		case "inHall":
			cantPass = "This door is out of your reach.";
		break;
		case "outside":
			cantPass = "You are outside";
		break;
		case "dead":
			cantPass = "The dead cannot open doors.";
		break;
		default: "none";
	}//end cant pass
}//end door click

function d6(){
	return Math.floor(Math.random()*6)+1;
}//end D6

function russRoulGame() {
	window.location.href='russRoulGame.html';
	
}//end Russian Roulette Game

function gameOver() {
	goldKey = false;
	goldKey2 = false;
	goldKey3 = false;
	//reload();
}//end dead protocol