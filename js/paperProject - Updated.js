// GOKU MOVES
var gokuSteadyState = ['js/personas/Goku/Regular/Goku_0-0.png', 'js/personas/Goku/Regular/Goku_0-1.png', 'js/personas/Goku/Regular/Goku_0-2.png', 
'js/personas/Goku/Regular/Goku_0-3.png', 'js/personas/Goku/Regular/Goku_0-2.png', 'js/personas/Goku/Regular/Goku_0-1.png']

var gokuPunch = ['js/personas/Goku/Regular/Goku_0-48.png', 'js/personas/Goku/Regular/Goku_0-49.png',
'js/personas/Goku/Regular/Goku_0-50.png', 'js/personas/Goku/Regular/Goku_0-51.png',
'js/personas/Goku/Regular/Goku_0-114.png', 'js/personas/Goku/Regular/Goku_0-115.png',
'js/personas/Goku/Regular/Goku_0-116.png','js/personas/Goku/Regular/Goku_0-117.png',
'js/personas/Goku/Regular/Goku_0-136.png', 'js/personas/Goku/Regular/Goku_0-137.png',
'js/personas/Goku/Regular/Goku_0-138.png', 'js/personas/Goku/Regular/Goku_0-139.png',
'js/personas/Goku/Regular/Goku_0-140.png', 'js/personas/Goku/Regular/Goku_0-141.png']

var gokuKick = ['js/personas/Goku/Regular/Goku_0-52.png', 'js/personas/Goku/Regular/Goku_0-53.png',
'js/personas/Goku/Regular/Goku_0-54.png', 'js/personas/Goku/Regular/Goku_0-55.png', 
'js/personas/Goku/Regular/Goku_0-56.png', 'js/personas/Goku/Regular/Goku_0-57.png',
'js/personas/Goku/Regular/Goku_0-68.png', 'js/personas/Goku/Regular/Goku_0-69.png',
'js/personas/Goku/Regular/Goku_0-70.png', 'js/personas/Goku/Regular/Goku_0-71.png',
'js/personas/Goku/Regular/Goku_0-72.png', 'js/personas/Goku/Regular/Goku_0-73.png',
'js/personas/Goku/Regular/Goku_0-74.png', 'js/personas/Goku/Regular/Goku_0-75.png',
'js/personas/Goku/Regular/Goku_0-76.png']

var gokuKiBlast = ['js/personas/Goku/Regular/Goku_0-58.png', 'js/personas/Goku/Regular/Goku_0-59.png',
'js/personas/Goku/Regular/Goku_0-60.png', 'js/personas/Goku/Regular/Goku_0-61.png',
'js/personas/Goku/Regular/Goku_0-62.png']

var gokuSS = ['js/personas/Goku/Regular/Goku_0-209.png', 'js/personas/Goku/Regular/Goku_0-210.png',
'js/personas/Goku/Regular/Goku_0-211.png', 'js/personas/Goku/Regular/Goku_0-212.png',
'js/personas/Goku/Regular/Goku_0-213.png', 'js/personas/Goku/Regular/Goku_0-214.png',
'js/personas/Goku/Regular/Goku_0-215.png', 'js/personas/Goku/Regular/Goku_0-215.png']


var gokuSSCharging = ['js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-1.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-2.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-3.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-4.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-5.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-6.png']


// VEGETA MOVES

var vegetaHit = ['js/personas/Vegeta/Regular/Vegeta_0-218.png', 'js/personas/Vegeta/Regular/Vegeta_0-219.png',
'js/personas/Vegeta/Regular/Vegeta_0-220.png', 'js/personas/Vegeta/Regular/Vegeta_0-221.png',
'js/personas/Vegeta/Regular/Vegeta_0-222.png', 'js/personas/Vegeta/Regular/Vegeta_0-223.png',
'js/personas/Vegeta/Regular/Vegeta_0-224.png', 'js/personas/Vegeta/Regular/Vegeta_0-225.png',
'js/personas/Vegeta/Regular/Vegeta_0-226.png', 'js/personas/Vegeta/Regular/Vegeta_0-227.png',
'js/personas/Vegeta/Regular/Vegeta_0-228.png']


var vegetaSteadyState = ['js/personas/Vegeta/Regular/Vegeta_0-0.png', 'js/personas/Vegeta/Regular/Vegeta_0-1.png', 'js/personas/Vegeta/Regular/Vegeta_0-2.png', 
'js/personas/Vegeta/Regular/Vegeta_0-3.png', 'js/personas/Vegeta/Regular/Vegeta_0-2.png', 'js/personas/Vegeta/Regular/Vegeta_0-1.png']

// MISC
var gokuHitsVegetaEffectsList = ['js/Hit/Effects/Effects_2.png', 'js/Hit/Effects/Effects_3.png']



/*var stage_1 = new Raster('js/Stage/Tournament.png')
stage_1.position = view.center
stage_1.scale(2,2)*/


//IMAGES

var stage = new Raster(new Size(1500, 1000))
stage.position = view.center
stage.source = 'js/Stage/Stage2.jpg'


var character = new Raster(gokuSteadyState[0])
character.position = new Point(100, 800);
character.scale(1.2, 1.2)


var other_character = new Raster(vegetaSteadyState[0])
other_character.position = new Point(1000, 800);
other_character.scale(-1.2, 1.2)
var l = 0

var vegetaHitEffects = new Raster(gokuHitsVegetaEffectsList[0]);
vegetaHitEffects.position = new Point(other_character.position.x, other_character.position.y)
vegetaHitEffects.scale(1)
vegetaHitEffects.visible = false

// GOKU VARIABLES

var gokuLeftPosition = true;
var gokuRightPosition = false;

var gokuSteadyStateSequence = 0;

var gokuPunchConfirmation = false;
var gokuKickConfirmation = false;
var gokuKiBlastConfirmation = false;
var gokuSSConfirmation = false;

var gokuAttackSequenceCount = 0


var gokuHitCount = 0

var gokuHitsVegeta = false

var gokuKiBlastAppear = false

var kamehamehaSequence = 0;
var gokuSsChargingSequenceCount = 0;




function setUpKamehameWave(){
	var kamehameHaHead = new Raster('js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-3.png')
	if (gokuLeftPosition){
		kamehameHaHead.position = new Point(character.position.x + 130, character.position.y - 30)
		kamehameHaHead.scale(1,1)
	}
	else if(gokuRightPosition){
		kamehameHaHead.position = new Point(character.position.x - 130, character.position.y - 30)
		kamehameHaHead.scale(-1,1)
	}
	
	kamehameHaHead.onFrame = gokuWaveMove
}

function gokuWaveMove(event){
	if (gokuLeftPosition){
		this.position.x += 10
	}
	else if(gokuRightPosition) {
		this.position.x -= 10
	}
	if (this.position.x > 1400 || this.position.x <= 0) {
		this.remove()
	}
	else if (this.hitTest(other_character.bounds)){
		gokuHitsVegeta = true
		vegetaOnHit(event, gokuHitsVegeta)
	}
}


function gokuSetUpSSCharging(){
	var kamehaCharging = new Raster(gokuSSCharging[0])
	if (gokuLeftPosition){
		kamehaCharging.position = new Point(character.position.x - 33, character.position.y - 15)
		kamehaCharging.scale(1,1)
	}
	else if(gokuRightPosition){
		kamehaCharging.position = new Point(character.position.x + 33, character.position.y - 15)
		kamehaCharging.scale(-1,1)
	}
	kamehaCharging.onFrame = gokuSsChargingSequence
}

function gokuSsChargingSequence (event) {
	if(event.count % 2 == 0) {
		this.source = gokuSSCharging[gokuSsChargingSequenceCount]
		if (gokuSsChargingSequenceCount > 7){
			gokuSsChargingSequenceCount = 0
			this.remove()
		}
		gokuSsChargingSequenceCount++
	}
}



function gokuSetUpkiBlast(event) {
	if(gokuKiBlastAppear) {
		var gokuKi = new Raster('js/Ki Blast/ki_blast.png')

		if (gokuLeftPosition){
			gokuKi.position = new Point(character.position.x + 100, character.position.y - 30)
			gokuKi.scale(2, 2)
		}
		else if(gokuRightPosition){
			gokuKi.position = new Point(character.position.x - 100, character.position.y - 30)
			gokuKi.scale(-2, 2)
		}

		gokuKi.onFrame = gokuKiBlastMove
	}

}

function gokuKiBlastMove (event) {
	if (gokuLeftPosition){
		this.position.x += 15
	}
	else if (gokuRightPosition){
		this.position.x -= 15
	}
	
	if (Math.abs(other_character.position.x - this.position.x) <= 5){
		if (Math.abs(other_character.position.y - this.position.y) <= 80){
			gokuHitsVegeta = true
			this.remove()
			vegetaOnHit(event,gokuHitsVegeta)
		}
	}
}


function gokuAttackPunch(event) {
	if (event.count % 4 == 0) {
		gokuAttackSequenceCount++;
		if (gokuAttackSequenceCount > 13) {
			gokuAttackSequenceCount = 0;
			character.onFrame = actionGoku
		}
		this.source = gokuPunch[gokuAttackSequenceCount]
		gokuHitsVegeta = false;
		gokuHitResult1()
		vegetaOnHit(event, gokuHitsVegeta)
	}
}

function gokuAttackKick(event) {
	if (event.count % 4 == 0) {
		gokuAttackSequenceCount++;
		if (gokuAttackSequenceCount > 13) {
			gokuAttackSequenceCount = 0;
			character.onFrame = actionGoku
		}
		this.source = gokuKick[gokuAttackSequenceCount]
		gokuHitsVegeta = false;
		gokuHitResult2()
		vegetaOnHit(event, gokuHitsVegeta)
	}
}

function gokuAttackKiBlast(event) {
	if (event.count % 5 == 0) {
		gokuAttackSequenceCount++;
		if (gokuAttackSequenceCount > 4) {
			gokuAttackSequenceCount = 0;
			character.onFrame = actionGoku
		}
		this.source = gokuKiBlast[gokuAttackSequenceCount]
		if (gokuAttackSequenceCount == 4) {
			gokuHitsVegeta = false
			gokuSetUpkiBlast()
		}
	}
}

function gokuAttackSS(event) {
	if (event.count % 10 == 0) {
		gokuAttackSequenceCount++;
		if (gokuAttackSequenceCount > 7) {
			gokuAttackSequenceCount = 0;
			character.onFrame = actionGoku
		}
		else if (gokuAttackSequenceCount == 4) {
			gokuSetUpSSCharging()
		}
		else if (gokuAttackSequenceCount ==  7) {
			setUpKamehameWave()
		}
		this.source = gokuSS[gokuAttackSequenceCount]
	}
}


function vegetaOnHit(event, gokuHitsVegeta) {
	if (gokuHitsVegeta) {
		gokuHitCount++
		vegetaHitEffects.visible = true
		if (gokuHitCount > 10) {
			gokuHitCount = 0;
		}
			
		if (event.count % 2 == 0) {
			other_character.source = vegetaHit[gokuHitCount]
		}
		l++
		if (l > 1) l = 0;
		vegetaHitEffects.source = gokuHitsVegetaEffectsList[l]
		vegetaHitEffects.position = new Point(other_character.position.x, other_character.position.y)
		vegetaHitEffects.scale(1)
	}
}

function gokuHitResult1(event){
	if (Math.abs(character.position.x - other_character.position.x) <= 130 && character.position.x < other_character.position.x) {
			if (Math.abs(character.position.y - other_character.position.y) <= 20 && character.position.y <= other_character.position.y){
				gokuHitsVegeta = true
			}
			else if (Math.abs(character.position.y - other_character.position.y) <= 200 && character.position.y > other_character.position.y) {
				gokuHitsVegeta = true

			}
		}
}


function gokuHitResult2(event) {
	if (Math.abs(character.position.x - other_character.position.x) <= 150 && character.position.x < other_character.position.x){
			if (Math.abs(character.position.y - other_character.position.y) <= 20 && character.position.y <= other_character.position.y){
				gokuHitsVegeta = true
			}
			else if (Math.abs(character.position.y - other_character.position.y) <= 75 && character.position.y > other_character.position.y) {
				gokuHitsVegeta = true
			}
	}

}



function actionGoku(event){
	if (Key.isDown('d') ){
		if (gokuLeftPosition) character.source = 'js/personas/Goku/Regular/Goku_0-41.png';
		else character.source = 'js/personas/Goku/Regular/Goku_0-38.png';
		if (character.position.x < 1400) {
			character.position.x += 10;
			if (character.hitTest(other_character.position)) {
				other_character.position.x += 15;
			}
		}
	}
	else if (Key.isDown('a')){
		if (gokuLeftPosition) character.source = 'js/personas/Goku/Regular/Goku_0-38.png';
		else character.source = 'js/personas/Goku/Regular/Goku_0-41.png';
		if (character.position.x > 100) {
			character.position.x -= 10
		}
	}
	else if (Key.isDown('w')){
		character.source = 'js/personas/Goku/Regular/Goku_0-24.png'
		if (character.position.y > 100) character.position.y -= 10;	
	}
	else if (Key.isDown('s')){
		if (character.position.y < 800){
			character.position.y += 10
			character.source = 'js/personas/Goku/Regular/Goku_0-29.png'
		}		
	}
	else if (gokuPunchConfirmation) {
		character.onFrame = gokuAttackPunch
	}
	else if (gokuKickConfirmation) {
		character.onFrame = gokuAttackKick
	}
	else if (gokuKiBlastConfirmation) {
		character.onFrame = gokuAttackKiBlast
		gokuKiBlastAppear = true
	}
	else if (gokuSSConfirmation) {
		character.onFrame = gokuAttackSS
	}
	else if (event.count % 10 == 0) {
		gokuSteadyStateSequence++;
		if (gokuSteadyStateSequence > 5) {
			gokuSteadyStateSequence = 0;
		}
		character.source = gokuSteadyState[gokuSteadyStateSequence]
	}
}

character.onFrame = actionGoku

// VEGETA CODE

function actionVegeta(event){

	if (Key.isDown('right')){
		other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-36.png'
		if(other_character.position.x < 1400) {
			other_character.position.x += 10
		}
	}
	else if (Key.isDown('left')){
		other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-34.png'
		if(other_character.position.x > 100) {
			other_character.position.x -= 10
		}
	}
	else if (Key.isDown('up')){
		other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-24.png'
		if(other_character.position.y > 100) {
			other_character.position.y -= 10
		}
	}
	else if (Key.isDown('down')){
		other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-29.png'
		if(other_character.position.y < 800) {
			other_character.position.y += 10
		}
	}
	else if (event.count % 10 == 0) {
		l++;
		if (l > 5) {
			l = 0;
		}
		other_character.source = vegetaSteadyState[gokuSteadyStateSequence]
		vegetaHitEffects.visible = false
	}	
}


other_character.onFrame = actionVegeta

function onKeyDown(event) {
	//Goku Moves
	if (event.key == 'j') {
		gokuPunchConfirmation = true;
		gokuHitResult1()
	}
	else if  (event.key == 'k') {
		gokuKickConfirmation = true;
		gokuHitResult2()
	}
	else if (event.key == 'u') {
		gokuKiBlastConfirmation = true;
	}
	else if (event.key == 'i') {
		gokuSSConfirmation = true;
		console.log(gokuSSConfirmation)
	}
}

function onKeyUp(event){
	// Goku Moves
	if (event.key == 'j') {
		gokuPunchConfirmation = false;
		
	}
	else if (event.key == 'k') {
		gokuKickConfirmation = false;

	}
	else if (event.key == 'u') {
		gokuKiBlastConfirmation = false;
	}
	else if (event.key == 'i') gokuSSConfirmation = false;

	if (event.key == 'd') {
		if (character.position.x > other_character.position.x){
			if (gokuLeftPosition) character.scale(-1, 1);
			gokuLeftPosition = false
			gokuRightPosition = true
		}
	}

	if (event.key == 'a') {
		if (character.position.x < other_character.position.x){
			if (gokuRightPosition) character.scale(-1, 1);
			gokuRightPosition = false
			gokuLeftPosition = true
		}
	}

}