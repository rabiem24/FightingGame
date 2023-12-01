// VEGETA MOVES
var vegetaSteadyState = ['js/personas/Vegeta/Regular/Vegeta_0-0.png', 'js/personas/Vegeta/Regular/Vegeta_0-1.png', 'js/personas/Vegeta/Regular/Vegeta_0-2.png', 
'js/personas/Vegeta/Regular/Vegeta_0-3.png', 'js/personas/Vegeta/Regular/Vegeta_0-2.png', 'js/personas/Vegeta/Regular/Vegeta_0-1.png']

var vegetaPunch = ['js/personas/Vegeta/Regular/Vegeta_0-50.png', 'js/personas/Vegeta/Regular/Vegeta_0-51.png',
'js/personas/Vegeta/Regular/Vegeta_0-52.png', 'js/personas/Vegeta/Regular/Vegeta_0-53.png',
'js/personas/Vegeta/Regular/Vegeta_0-54.png', 'js/personas/Vegeta/Regular/Vegeta_0-55.png',
'js/personas/Vegeta/Regular/Vegeta_0-56.png', 'js/personas/Vegeta/Regular/Vegeta_0-57.png',
'js/personas/Vegeta/Regular/Vegeta_0-58.png', 'js/personas/Vegeta/Regular/Vegeta_0-81.png',
'js/personas/Vegeta/Regular/Vegeta_0-82.png', 'js/personas/Vegeta/Regular/Vegeta_0-83.png',
'js/personas/Vegeta/Regular/Vegeta_0-84.png', 'js/personas/Vegeta/Regular/Vegeta_0-5.png']

var vegetaKick = ['js/personas/Vegeta/Regular/Vegeta_0-110.png', 'js/personas/Vegeta/Regular/Vegeta_0-111.png',
'js/personas/Vegeta/Regular/Vegeta_0-112.png', 'js/personas/Vegeta/Regular/Vegeta_0-113.png', 
'js/personas/Vegeta/Regular/Vegeta_0-114.png', 'js/personas/Vegeta/Regular/Vegeta_0-115.png',
'js/personas/Vegeta/Regular/Vegeta_0-116.png', 'js/personas/Vegeta/Regular/Vegeta_0-117.png',
'js/personas/Vegeta/Regular/Vegeta_0-132.png', 'js/personas/Vegeta/Regular/Vegeta_0-133.png',
'js/personas/Vegeta/Regular/Vegeta_0-134.png', 'js/personas/Vegeta/Regular/Vegeta_0-135.png',
'js/personas/Vegeta/Regular/Vegeta_0-136.png', 'js/personas/Vegeta/Regular/Vegeta_0-137.png',
'js/personas/Vegeta/Regular/Vegeta_0-138.png']

var vegetaKiBlast = ['js/personas/Vegeta/Regular/Vegeta_0-199.png', 'js/personas/Vegeta/Regular/Vegeta_0-200.png',
'js/personas/Vegeta/Regular/Vegeta_0-201.png', 'js/personas/Vegeta/Regular/Vegeta_0-202.png',
'js/personas/Vegeta/Regular/Vegeta_0-203.png']

var vegetaSS = ['js/personas/Vegeta/Regular/Vegeta_0-169.png', 'js/personas/Vegeta/Regular/Vegeta_0-170.png',
'js/personas/Vegeta/Regular/Vegeta_0-171.png', 'js/personas/Vegeta/Regular/Vegeta_0-172.png',
'js/personas/Vegeta/Regular/Vegeta_0-173.png', 'js/personas/Vegeta/Regular/Vegeta_0-174.png']

var vegetaSSBlast = ['js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-1.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-2.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-3.png']

var vegetaSSCharging = ['js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-1.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-2.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-3.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-4.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-5.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-6.png']

// GOKU MOVES

var gokuBeingHit = ['js/personas/Goku/Regular/Goku_0-222.png', 'js/personas/Goku/Regular/Goku_0-223.png',
'js/personas/Goku/Regular/Goku_0-224.png', 'js/personas/Goku/Regular/Goku_0-225.png',
'js/personas/Goku/Regular/Goku_0-226.png', 'js/personas/Goku/Regular/Goku_0-227.png',
'js/personas/Goku/Regular/Goku_0-228.png', 'js/personas/Goku/Regular/Goku_0-229.png',
'js/personas/Goku/Regular/Goku_0-230.png', 'js/personas/Goku/Regular/Goku_0-231.png',
'js/personas/Goku/Regular/Goku_0-232.png']


var gokuSteady = ['js/personas/Goku/Regular/Goku_0-0.png', 'js/personas/Goku/Regular/Goku_0-1.png', 'js/personas/Goku/Regular/Goku_0-2.png', 
'js/personas/Goku/Regular/Goku_0-3.png', 'js/personas/Goku/Regular/Goku_0-2.png', 'js/personas/Goku/Regular/Goku_0-1.png']

// MISC
var vegetaHitEffectsList = ['js/Hit/Effects/Effects_2.png', 'js/Hit/Effects/Effects_3.png']



/*var stage_1 = new Raster('js/Stage/Jungle-Level_site.png')
stage_1.position = view.center
stage_1.scale(2,2)*/


//IMAGES

var stage = new Raster(new Size(1500, 1000))
stage.position = view.center
stage.source = 'js/Stage/Stage2.jpg'


var other_character = new Raster(vegetaSteadyState[0])
other_character.position = new Point(100, 800);
other_character.scale(-1.2, 1.2)


var character = new Raster(gokuSteady[0])
character.position = new Point(1000, 800);
character.scale(1.2, 1.2)
var l = 0

var gokuHitEffects = new Raster(vegetaHitEffectsList[0]);
gokuHitEffects.position = new Point(character.position.x, character.position.y)
gokuHitEffects.scale(1)
gokuHitEffects.visible = false

// VEGETA'S VARIABLES

var vegetaLeftPosition = true;
var vegetaRightPosition = false;

var vegetaSteadyStateSequenceCount = 0;
var vegetaPunchConfirmation = false;
var vegetaKickConfirmation = false;
var vegetaKiBlastConfirmation = false;
var vegetaSSConfirmation = false;

var vegetaAttackSequenceCount = 0


var vegetaHitCount = 0

var vegetaHitsGoku = false

var vegetaKiBlastAppear = false

var galickGunSequenceCount = 0;
var vegetaSsChargingSequenceCount = 0;


// VEGETA FUNCTIONS

function setUpGalickGun(){
	var galickGunHead = new Raster('js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-3.png')
	if (vegetaLeftPosition){
		galickGunHead.position = new Point(other_character.position.x + 130, other_character.position.y - 30)
		galickGunHead.scale(1,1)
	}
	else if(vegetaRightPosition){
		galickGunHead.position = new Point(other_character.position.x - 130, other_character.position.y - 30)
		galickGunHead.scale(-1,1)
	}
	
	galickGunHead.onFrame = vegetaWaveMove
}

function vegetaWaveMove(event){
	if (vegetaLeftPosition){
		this.position.x += 10
	}
	else if(vegetaRightPosition) {
		this.position.x -= 10
	}
	if (this.position.x > 1400 || this.position.x <= 0) {
		this.remove()
	}
	else if (this.hitTest(character.bounds)){
		vegetaHitsGoku = true
		gokuOnHit(event, vegetaHitsGoku)
	}
}


function vegetaSetUpSSCharging(){
	var galickGunCharging = new Raster(vegetaSSCharging[0])
	if (vegetaLeftPosition){
		galickGunCharging.position = new Point(other_character.position.x - 33, other_character.position.y - 15)
		galickGunCharging.scale(1,1)
	}
	else if(vegetaRightPosition){
		galickGunCharging.position = new Point(other_character.position.x + 33, other_character.position.y - 15)
		galickGunCharging.scale(-1,1)
	}
	galickGunCharging.onFrame = vegetaSsChargingSequence
}

function vegetaSsChargingSequence (event) {
	if(event.count % 2 == 0) {
		this.source = vegetaSSCharging[vegetaSsChargingSequenceCount]
		if (vegetaSsChargingSequenceCount > 7){
			vegetaSsChargingSequenceCount = 0
			this.remove()
		}
		vegetaSsChargingSequenceCount++
	}
}



function vegetaSetUpkiBlast(event) {
	if(vegetaKiBlastAppear) {
		var vegetaKi = new Raster('js/Ki Blast/ki_blast.png')

		if (vegetaLeftPosition){
			vegetaKi.position = new Point(other_character.position.x + 100, other_character.position.y - 30)
			vegetaKi.scale(2, 2)
		}
		else if(vegetaRightPosition){
			vegetaKi.position = new Point(other_character.position.x - 100, other_character.position.y - 30)
			vegetaKi.scale(-2, 2)
		}

		vegetaKi.onFrame = vegetaKiBlastMove
	}

}

function vegetaKiBlastMove (event) {
	if (vegetaLeftPosition){
		this.position.x += 15
	}
	else if (vegetaRightPosition){
		this.position.x -= 15
	}
	
	if (Math.abs(character.position.x - this.position.x) <= 5){
		if (Math.abs(character.position.y - this.position.y) <= 80){
			vegetaHitsGoku = true
			this.remove()
			gokuOnHit(event,vegetaHitsGoku)
		}
	}
}


function vegetaAttackPunch(event) {
	if (event.count % 4 == 0) {
		vegetaAttackSequenceCount++;
		if (vegetaAttackSequenceCount > 13) {
			vegetaAttackSequenceCount = 0;
			other_character.onFrame = actionVegeta
		}
		this.source = vegetaPunch[vegetaAttackSequenceCount]
		vegetaHitsGoku = false;
		vegetaHitResult1()
		gokuOnHit(event, vegetaHitsGoku)
	}
}

function vegetaAttackKick(event) {
	if (event.count % 4 == 0) {
		vegetaAttackSequenceCount++;
		if (vegetaAttackSequenceCount > 13) {
			vegetaAttackSequenceCount = 0;
			other_character.onFrame = actionVegeta
		}
		this.source = vegetaKick[vegetaAttackSequenceCount]
		vegetaHitsGoku = false;
		vegetaHitResult2()
		gokuOnHit(event, vegetaHitsGoku)
	}
}

function vegetaAttackKiBlast(event) {
	if (event.count % 5 == 0) {
		vegetaAttackSequenceCount++;
		if (vegetaAttackSequenceCount > 4) {
			vegetaAttackSequenceCount = 0;
			other_character.onFrame = actionVegeta
		}
		this.source = vegetaKiBlast[vegetaAttackSequenceCount]
		if (vegetaAttackSequenceCount == 4) {
			vegetaHitsGoku = false
			vegetaSetUpkiBlast()
		}
	}
}

function vegetaAttackSS(event) {
	if (event.count % 10 == 0) {
		vegetaAttackSequenceCount++;
		if (vegetaAttackSequenceCount > 6) {
			vegetaAttackSequenceCount = 0;
			other_character.onFrame = actionVegeta
		}
		else if (vegetaAttackSequenceCount == 3) {
			vegetaSetUpSSCharging()
		}
		else if (vegetaAttackSequenceCount ==  6) {
			setUpGalickGun()
		}
		this.source = vegetaSS[vegetaAttackSequenceCount]
	}
}


function gokuOnHit(event, vegetaHitsGoku) {
	if (vegetaHitsGoku) {
		vegetaHitCount++
		gokuHitEffects.visible = true
		if (vegetaHitCount > 10) {
			vegetaHitCount = 0;
		}
			
		if (event.count % 2 == 0) {
			character.source = gokuBeingHit[vegetaHitCount]
		}
		l++
		if (l > 1) l = 0;
		gokuHitEffects.source = vegetaHitEffectsList[l]
		gokuHitEffects.position = new Point(character.position.x, character.position.y)
		gokuHitEffects.scale(1)
	}
}

function vegetaHitResult1(event){
	if (Math.abs(other_character.position.x - character.position.x) <= 130 && other_character.position.x < character.position.x) {
			if (Math.abs(other_character.position.y - character.position.y) <= 20 && other_character.position.y <= character.position.y){
				vegetaHitsGoku = true
			}
			else if (Math.abs(other_character.position.y - character.position.y) <= 200 && other_character.position.y > character.position.y) {
				vegetaHitsGoku = true

			}
		}
}


function vegetaHitResult2(event) {
	if (Math.abs(other_character.position.x - character.position.x) <= 150 && other_character.position.x < character.position.x){
			if (Math.abs(other_character.position.y - character.position.y) <= 20 && other_character.position.y <= character.position.y){
				vegetaHitsGoku = true
			}
			else if (Math.abs(other_character.position.y - character.position.y) <= 75 && other_character.position.y > character.position.y) {
				vegetaHitsGoku = true
			}
	}

}



function actionVegeta(event){
	if (Key.isDown('d') ){
		if (vegetaLeftPosition) other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-34.png';
		else other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-35.png';
		if (other_character.position.x < 1400) {
			other_character.position.x += 10;
			if (other_character.hitTest(character.position)) {
				character.position.x += 15;
			}
		}
	}
	else if (Key.isDown('a')){
		if (vegetaLeftPosition) other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-35.png';
		else other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-34.png';
		if (other_character.position.x > 100) {
			other_character.position.x -= 10
		}
	}
	else if (Key.isDown('w')){
		other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-24.png'
		if (other_character.position.y > 100) other_character.position.y -= 10;	
	}
	else if (Key.isDown('s')){
		if (other_character.position.y < 800){
			other_character.position.y += 10
			other_character.source = 'js/personas/Vegeta/Regular/Vegeta_0-29.png'
		}		
	}
	else if (vegetaPunchConfirmation) {
		other_character.onFrame = vegetaAttackPunch
	}
	else if (vegetaKickConfirmation) {
		other_character.onFrame = vegetaAttackKick
	}
	else if (vegetaKiBlastConfirmation) {
		other_character.onFrame = vegetaAttackKiBlast
		vegetaKiBlastAppear = true
	}
	else if (vegetaSSConfirmation) {
		other_character.onFrame = vegetaAttackSS
	}
	else if (event.count % 10 == 0) {
		vegetaSteadyStateSequenceCount++;
		if (vegetaSteadyStateSequenceCount > 5) {
			vegetaSteadyStateSequenceCount = 0;
		}
		other_character.source = vegetaSteadyState[vegetaSteadyStateSequenceCount]
	}
}

other_character.onFrame = actionVegeta

// VEGETA CODE

function bolongkoy(event){

	if (Key.isDown('right')){
		character.source = 'js/personas/Vegeta/Regular/Vegeta_0-36.png'
		if(character.position.x < 1400) {
			character.position.x += 10
		}
	}
	else if (Key.isDown('left')){
		character.source = 'js/personas/Vegeta/Regular/Vegeta_0-34.png'
		if(character.position.x > 100) {
			character.position.x -= 10
		}
	}
	else if (Key.isDown('up')){
		character.source = 'js/personas/Vegeta/Regular/Vegeta_0-24.png'
		if(character.position.y > 100) {
			character.position.y -= 10
		}
	}
	else if (Key.isDown('down')){
		character.source = 'js/personas/Vegeta/Regular/Vegeta_0-29.png'
		if(character.position.y < 800) {
			character.position.y += 10
		}
	}
	else if (event.count % 10 == 0) {
		l++;
		if (l > 5) {
			l = 0;
		}
		character.source = gokuSteady[vegetaSteadyStateSequenceCount]
		gokuHitEffects.visible = false
	}	
}


character.onFrame = bolongkoy

function onKeyDown(event) {
	//Goku Moves
	if (event.key == 'j') {
		vegetaPunchConfirmation = true;
		vegetaHitResult1()
	}
	else if  (event.key == 'k') {
		vegetaKickConfirmation = true;
		vegetaHitResult2()
	}
	else if (event.key == 'u') {
		vegetaKiBlastConfirmation = true;
	}
	else if (event.key == 'i') vegetaSSConfirmation = true;
}

function onKeyUp(event){
	// Goku Moves
	if (event.key == 'j') {
		vegetaPunchConfirmation = false;
		
	}
	else if (event.key == 'k') {
		vegetaKickConfirmation = false;

	}
	else if (event.key == 'u') {
		vegetaKiBlastConfirmation = false;
	}
	else if (event.key == 'i') vegetaSSConfirmation = false;

	if (event.key == 'd') {
		if (other_character.position.x > character.position.x){
			if (vegetaLeftPosition) other_character.scale(-1, 1);
			vegetaLeftPosition = false
			vegetaRightPosition = true
		}
	}

	if (event.key == 'a') {
		if (other_character.position.x < character.position.x){
			if (vegetaRightPosition) other_character.scale(-1, 1);
			vegetaRightPosition = false
			vegetaLeftPosition = true
		}
	}


	//Vegeta Moves


}