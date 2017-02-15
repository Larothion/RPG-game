/*Create 4 different characters to be chosen.  This will comprise of 4 "boxes" 
with the characters name on top, an image in the middle, and the HP at the bottom.*/
$(document).ready(function(){

var knightHP = 120;
var knightAP = 0;

var pyroHP = 80;
var pyroAP = 0;

var pursuerHP = 250;
var pursuerAP = 3;

var crystalHP = 150;
var crystalAP = 18;

var yhormHP = 400;
var yhormAP = 7;
var yhormAd = new Audio('assets/audio/yhormAudio.mp3');




/*switches*/

var pursuerArena = false;
var crystalArena = false;
var yhormArena = false;
var knightArena = false;
var pyroArena = false;

/*end switches*/

$(".knight-hp").text(knightHP);
$(".pyro-hp").text(pyroHP);
$(".pursuer-hp").text(pursuerHP);
$(".crystal-sage-hp").text(crystalHP);
$(".yhorm-hp").text(yhormHP);

/*When a user chooses a character, move the chosen character to a "your character" section and the 
enemies to an "availale for attack section"*/

$(".knightCont").on("click", function() {
	knightArena = true;
	$(".knightCont").animate({
		top:"500px",
		left:"400px"
		}, "fast");
	$(".pyromancerCont").hide();
});

$(".pyromancerCont").on("click", function() {
	pyroArena = true;
	$(".pyromancerCont").animate({
		top:"500px",
		left:"400px"
		}, "normal");
	$(".knightCont").hide();
});

/*clicking on an enemy in the "available for attack section" will move that enemy to a "defender" section.
*/

$(".pursuerCont").on("click", function() {
	pursuerArena = true;
	$(".pursuerCont").animate({
		top:"450px",
		left:"500px"
		}, "normal");

});

$(".crystalCont").on("click", function() {
	crystalArena = true;
	$(".crystalCont").animate({
		top:"450px",
		left:"410px"
		}, "normal");
});

$(".yhormCont").on("click", function() {
	yhormArena = true;
	$(".yhormCont").animate({
		top:"450px",
		left:"300px"
		}, "normal");
});

/*The user can then fight the enemy using the attack button.  When the attack button is pressed
the defender and enemy chartacter lose hp according to each of their respective attacks.  The enemy only has
1 counter attack value while the userCharacter has a scaling one.  It then displays the damage that was done. It also 
permanently stores the users' attack value. */

/*knight code*/
$(".attack1").on("click",function() {
	if (knightArena && pursuerArena) {
		knightAP += 5
		pursuerHP = pursuerHP - knightAP;
		knightHP = knightHP - pursuerAP
		$(".pursuer-hp").text(pursuerHP);
		$(".knight-hp").text(knightHP);
		$(".combatLogsText").html("You hit the Pursuer for " + knightAP + " damage!" + "<br><br>" + 
			"The Pursuer hit you for " + pursuerAP + " damage.");
		console.log("Attack is working");
	}
	if (pursuerHP <= 0) {
		$(".pursuerCont").hide();
		pursuerArena = false;
	}
});

$(".attack1").on("click",function() {
	if (knightArena && crystalArena) {
		knightAP += 5
		crystalHP = crystalHP - knightAP;
		knightHP = knightHP - crystalAP
		$(".crystal-sage-hp").text(crystalHP);
		$(".knight-hp").text(knightHP);
		$(".combatLogsText").html("You hit the Crystal Sage for " + knightAP + " damage!" + "<br><br>" + 
			"The Crystal Sage hit you for " + crystalAP + " damage.");
		console.log("Attack is working");
	}
	if (crystalHP <= 0) {
		$(".crystalCont").hide();
		crystalArena = false;
	}
});

$(".attack1").on("click",function() {
	if (knightArena && yhormArena) {
		knightAP += 5
		yhormHP = yhormHP - knightAP;
		knightHP = knightHP - yhormAP
		$(".yhorm-hp").text(yhormHP);
		$(".knight-hp").text(knightHP);
		$(".combatLogsText").html("You hit Yhorm the Giant for " + knightAP + " damage!" + "<br><br>" + 
			"Yhorm hit you for " + yhormAP + " damage.");
		console.log("Attack is working");
	}
	if (yhormHP <= 200) {
		yhormAd.play()
		$(".yhormCont").animate({
		position: "absolute",
		top:"100px",
		left:"200px",
		width: "700px",
		height:"700px"
		}, "slow");
		$(".yhorm").animate({
		height:"600px"
		}, "slow");
		$(".charCont").hide()
	}
	if (yhormHP <= 0) {
		yhormAd.pause();
		$(".yhormCont").hide();
		yhormArena = false;
	}
});


/*end knight code*/

/*Pyro code
*/

$(".attack1").on("click",function() {
	if (pyroArena && pursuerArena) {
		pyroAP += 7
		pursuerHP = pursuerHP - pyroAP;
		pursuerAP = 7;
		pyroHP = pyroHP - pursuerAP
		$(".pursuer-hp").text(pursuerHP);
		$(".pyro-hp").text(pyroHP);
		$(".combatLogsText").html("You hit the Pursuer for " + pyroAP + " damage!" + "<br><br>" + 
			"The Pursuer's Sword has fire protection, increasing his attack!  He hits you for " + pursuerAP + " damage.");
		console.log("Attack is working");
	}
	if (pursuerHP <= 0) {
		$(".pursuerCont").hide();
		pursuerArena = false;
	}
});

$(".attack1").on("click",function() {
	if (pyroArena && crystalArena) {
		pyroAP += 7
		crystalHP = crystalHP - pyroAP;
		crystalAP = 2;
		pyroHP = pyroHP - crystalAP
		$(".crystal-sage-hp").text(crystalHP);
		$(".pyro-hp").text(pyroHP);
		$(".combatLogsText").html("You hit the Crystal Sage for " + pyroAP + " damage!" + "<br><br>" + 
			"The Crystal Sage's magic is weak against fire!  He hits you for " + crystalAP + " damage.");
		console.log("Attack is working");
	}
	if (crystalHP <= 0) {
		$(".crystalCont").hide();
		crystalArena = false;
	}
});

$(".attack1").on("click",function() {
	if (pyroArena && yhormArena) {
		pyroAP += 7
		yhormHP = yhormHP - pyroAP;
		pyroHP = pyroHP - yhormAP
		$(".yhorm-hp").text(yhormHP);
		$(".pyro-hp").text(pyroHP);
		$(".combatLogsText").html("You hit Yhorm the Giant for " + pyroAP + " damage!" + "<br><br>" + 
			"Yhorm hit you for " + yhormAP + " damage.");
		console.log("Attack is working");
	}
	if (yhormHP <= 200) {
		yhormAd.play()
		$(".yhormCont").animate({
		top:"100px",
		left:"300px",
		width: "700px",
		height:"700px"
		}, "slow");
		$(".yhorm").animate({
		height:"600px"
		}, "slow");
	}
	if (yhormHP <= 0) {
		yhormAd.pause();
		$(".yhormCont").hide();
		yhormArena = false;
	}
});
/*end pyro code*/


/*If the usercharacter's health goes to or below 0, then display game over, end the scripts, and display a restart(reset)
button.*/

	$(".attack1").on("click",function() {
		if (knightHP <= 0) {
		$(".knightCont").hide();
		$(".gameTitle").html("YOU DIED");
		yhormArena = false;
		crystalArena = false;
		pursuerArena = false;
			};
	});

	$(".attack1").on("click",function() {
	if (pyroHP <= 0) {
	$(".gameTitle").html("YOU DIED");
	$(".pyroCont").hide();
	yhormArena = false;
	crystalArena = false;
	pursuerArena = false;
		};
	});



/*if the user defeats a character, display that they "have defeated "enemy name", and can choose to fight another enemy".



Once all 3 are defeated, it display "You Won!! Game Over!" and displays the restart(reset button)*/


$(".attack1").on("click",function() {
	if (pursuerHP <= 0 && crystalHP <= 0 && yhormHP <= 0) {
	$(".gameTitle").html("You Won, Champion of Ash!")
}
});









});







