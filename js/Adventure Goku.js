// GOKU MOVES
var gokuSteadyState = ['js/characters/Goku/Regular/Goku_0-0.png', 'js/characters/Goku/Regular/Goku_0-1.png', 'js/characters/Goku/Regular/Goku_0-2.png', 
'js/characters/Goku/Regular/Goku_0-3.png', 'js/characters/Goku/Regular/Goku_0-2.png', 'js/characters/Goku/Regular/Goku_0-1.png']

var gokuPunch = ['js/characters/Goku/Regular/Goku_0-48.png', 'js/characters/Goku/Regular/Goku_0-49.png',
'js/characters/Goku/Regular/Goku_0-50.png', 'js/characters/Goku/Regular/Goku_0-51.png',
'js/characters/Goku/Regular/Goku_0-114.png', 'js/characters/Goku/Regular/Goku_0-115.png',
'js/characters/Goku/Regular/Goku_0-116.png','js/characters/Goku/Regular/Goku_0-117.png',
'js/characters/Goku/Regular/Goku_0-136.png', 'js/characters/Goku/Regular/Goku_0-137.png',
'js/characters/Goku/Regular/Goku_0-138.png', 'js/characters/Goku/Regular/Goku_0-139.png',
'js/characters/Goku/Regular/Goku_0-140.png', 'js/characters/Goku/Regular/Goku_0-141.png']

var gokuKick = ['js/characters/Goku/Regular/Goku_0-52.png', 'js/characters/Goku/Regular/Goku_0-53.png',
'js/characters/Goku/Regular/Goku_0-54.png', 'js/characters/Goku/Regular/Goku_0-55.png', 
'js/characters/Goku/Regular/Goku_0-56.png', 'js/characters/Goku/Regular/Goku_0-57.png',
'js/characters/Goku/Regular/Goku_0-68.png', 'js/characters/Goku/Regular/Goku_0-69.png',
'js/characters/Goku/Regular/Goku_0-70.png', 'js/characters/Goku/Regular/Goku_0-71.png',
'js/characters/Goku/Regular/Goku_0-72.png', 'js/characters/Goku/Regular/Goku_0-73.png',
'js/characters/Goku/Regular/Goku_0-74.png', 'js/characters/Goku/Regular/Goku_0-75.png',
'js/characters/Goku/Regular/Goku_0-76.png']

var gokuKiBlast = ['js/characters/Goku/Regular/Goku_0-58.png', 'js/characters/Goku/Regular/Goku_0-59.png',
'js/characters/Goku/Regular/Goku_0-60.png', 'js/characters/Goku/Regular/Goku_0-61.png',
'js/characters/Goku/Regular/Goku_0-62.png']

var gokuSS = ['js/characters/Goku/Regular/Goku_0-209.png', 'js/characters/Goku/Regular/Goku_0-210.png',
'js/characters/Goku/Regular/Goku_0-211.png', 'js/characters/Goku/Regular/Goku_0-212.png',
'js/characters/Goku/Regular/Goku_0-213.png', 'js/characters/Goku/Regular/Goku_0-214.png',
'js/characters/Goku/Regular/Goku_0-215.png', 'js/characters/Goku/Regular/Goku_0-215.png']

var gokuSSBlast = ['js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-1.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-2.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-3.png']

var gokuSSCharging = ['js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-1.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-2.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-3.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-4.png',
'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-5.png', 'js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_2-6.png']

var gokuHit = ['js/characters/Vegeta/Regular/Goku_0-779.png', 'js/characters/Vegeta/Regular/Goku_0-780.png',
'js/characters/Vegeta/Regular/Goku_0-781.png']

// VEGETA MOVES

var vegetaHit = ['js/characters/Vegeta/Regular/Vegeta_0-218.png', 'js/characters/Vegeta/Regular/Vegeta_0-219.png',
'js/characters/Vegeta/Regular/Vegeta_0-220.png', 'js/characters/Vegeta/Regular/Vegeta_0-221.png',
'js/characters/Vegeta/Regular/Vegeta_0-222.png', 'js/characters/Vegeta/Regular/Vegeta_0-223.png',
'js/characters/Vegeta/Regular/Vegeta_0-224.png', 'js/characters/Vegeta/Regular/Vegeta_0-225.png',
'js/characters/Vegeta/Regular/Vegeta_0-226.png', 'js/characters/Vegeta/Regular/Vegeta_0-227.png',
'js/characters/Vegeta/Regular/Vegeta_0-228.png']


var vegetaSteadyState = ['js/characters/Vegeta/Regular/Vegeta_0-0.png', 'js/characters/Vegeta/Regular/Vegeta_0-1.png', 'js/characters/Vegeta/Regular/Vegeta_0-2.png', 
'js/characters/Vegeta/Regular/Vegeta_0-3.png', 'js/characters/Vegeta/Regular/Vegeta_0-2.png', 'js/characters/Vegeta/Regular/Vegeta_0-1.png']

// MISC
var hitEffectsList = ['js/Hit/Effects/Effects_2.png', 'js/Hit/Effects/Effects_3.png']



var stage_1 = new Raster('js/Stage/Planet Namek.png')
stage_1.position = view.center
stage_1.scale(2,2)


//IMAGES

/*var stage = new Raster(new Size(1500, 1000))
stage.position = view.center
stage.source = 'js/Stage/Stage2.jpg'*/


var character = new Raster(gokuSteadyState[0])
character.position = new Point(50, 420);
character.scale(1, 1)

var gokuHitEffects = new Raster(hitEffectsList[0]);
gokuHitEffects.position = new Point(character.position.x, character.position.y)
gokuHitEffects.scale(1)
gokuHitEffects.visible = false


var other_character = new Raster(vegetaSteadyState[0])
other_character.position = new Point(1000, 800);
other_character.scale(-1.2, 1.2)
var l = 0

var vegetaHitEffects = new Raster(hitEffectsList[0]);
vegetaHitEffects.position = new Point(other_character.position.x, other_character.position.y)
vegetaHitEffects.scale(1)
vegetaHitEffects.visible = false

// GOKU VARIABLES

var gokuLeftPosition = true;
var gokuRightPosition = false;

var i = 0;
var gokuPunchConfirmation = false;
var gokuKickConfirmation = false;
var gokuKiBlastConfirmation = false;
var kameHameWave = false;
var gokuAttackSequence = 0


var gokuHitCount = 0

var hit = false

var kiBlastAppear = false

var SS = false
var kamehamehaSequence = 0;
var ssSequenceCount = 0;


// VEGETA VARIABLES

function kamehameWave(){
	var kamehameHaHead = new Raster('js/Ki Blast/Kamehameha/Kamehameha Sprites/Kamehameha_0-3.png')
	if (gokuLeftPosition){
		kamehameHaHead.position = new Point(character.position.x + 130, character.position.y - 30)
		kamehameHaHead.scale(1,1)
	}
	else if(gokuRightPosition){
		kamehameHaHead.position = new Point(character.position.x - 130, character.position.y - 30)
		kamehameHaHead.scale(-1,1)
	}
	
	kamehameHaHead.onFrame = waveMove
}

function waveMove(event){
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
		hit = true
		vegetaOnHit(event, hit)
	}
}


function setUpSSCharging(){
	var kamehaCharging = new Raster(gokuSSCharging[0])
	if (gokuLeftPosition){
		kamehaCharging.position = new Point(character.position.x - 33, character.position.y - 15)
		kamehaCharging.scale(1,1)
	}
	else if(gokuRightPosition){
		kamehaCharging.position = new Point(character.position.x + 33, character.position.y - 15)
		kamehaCharging.scale(-1,1)
	}
	kamehaCharging.onFrame = ssChargingSequence
}

function ssChargingSequence (event) {
	if(event.count % 2 == 0) {
		this.source = gokuSSCharging[ssSequenceCount]
		if (ssSequenceCount > 7){
			ssSequenceCount = 0
			this.remove()
		}
		ssSequenceCount++
	}
}



function setUpkiBlast(event) {
	if(kiBlastAppear) {
		var ki = new Raster('js/Ki Blast/ki_blast.png')

		if (gokuLeftPosition){
			ki.position = new Point(character.position.x + 100, character.position.y - 30)
			ki.scale(2, 2)
		}
		else if(gokuRightPosition){
			ki.position = new Point(character.position.x - 100, character.position.y - 30)
			ki.scale(-2, 2)
		}

		ki.onFrame = kiBlastMove
	}

}

function kiBlastMove (event) {
	if (gokuLeftPosition){
		this.position.x += 15
	}
	else if (gokuRightPosition){
		this.position.x -= 15
	}
	
	if (Math.abs(other_character.position.x - this.position.x) <= 5){
		if (Math.abs(other_character.position.y - this.position.y) <= 80){
			hit = true
			this.remove()
			vegetaOnHit(event,hit)
		}
	}
}


function attackPunch(event) {
	if (event.count % 4 == 0) {
		gokuAttackSequence++;
		if (gokuAttackSequence > 13) {
			gokuAttackSequence = 0;
			character.onFrame = actionGoku
		}
		this.source = gokuPunch[gokuAttackSequence]
		hit = false;
		hitResult1()
		vegetaOnHit(event, hit)
	}
}

function attackKick(event) {
	if (event.count % 4 == 0) {
		gokuAttackSequence++;
		if (gokuAttackSequence > 13) {
			gokuAttackSequence = 0;
			character.onFrame = actionGoku
		}
		this.source = gokuKick[gokuAttackSequence]
		hit = false;
		hitResult2()
		vegetaOnHit(event, hit)
	}
}

function attackKiBlast(event) {
	if (event.count % 5 == 0) {
		gokuAttackSequence++;
		if (gokuAttackSequence > 4) {
			gokuAttackSequence = 0;
			character.onFrame = actionGoku
		}
		this.source = gokuKiBlast[gokuAttackSequence]
		if (gokuAttackSequence == 4) {
			hit = false
			setUpkiBlast()
		}
	}
}

function attackSS(event) {
	if (event.count % 10 == 0) {
		gokuAttackSequence++;
		if (gokuAttackSequence > 7) {
			gokuAttackSequence = 0;
			character.onFrame = actionGoku
		}
		else if (gokuAttackSequence == 4) {
			setUpSSCharging()
		}
		else if (gokuAttackSequence ==  7) {
			kamehameWave()
		}
		this.source = gokuSS[gokuAttackSequence]
	}
}


function vegetaOnHit(event, hit) {
	if (hit) {
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
		vegetaHitEffects.source = hitEffectsList[l]
		vegetaHitEffects.position = new Point(other_character.position.x, other_character.position.y)
		vegetaHitEffects.scale(1)
	}
}

function hitResult1(event){
	if (Math.abs(character.position.x - other_character.position.x) <= 130 && character.position.x < other_character.position.x) {
			if (Math.abs(character.position.y - other_character.position.y) <= 20 && character.position.y <= other_character.position.y){
				hit = true
			}
			else if (Math.abs(character.position.y - other_character.position.y) <= 200 && character.position.y > other_character.position.y) {
				hit = true

			}
		}
}


function hitResult2(event) {
	if (Math.abs(character.position.x - other_character.position.x) <= 150 && character.position.x < other_character.position.x){
			if (Math.abs(character.position.y - other_character.position.y) <= 20 && character.position.y <= other_character.position.y){
				hit = true
			}
			else if (Math.abs(character.position.y - other_character.position.y) <= 75 && character.position.y > other_character.position.y) {
				hit = true
			}
	}

}



function actionGoku(event){
	if (Key.isDown('d') ){
		if (gokuLeftPosition) character.source = 'js/characters/Goku/Regular/Goku_0-41.png';
		else character.source = 'js/characters/Goku/Regular/Goku_0-38.png';
		if (character.position.x < 1400) {
			character.position.x += 10;
			if (character.hitTest(other_character.position)) {
				other_character.position.x += 15;
			}
		}
	}
	else if (Key.isDown('a')){
		if (gokuLeftPosition) character.source = 'js/characters/Goku/Regular/Goku_0-38.png';
		else character.source = 'js/characters/Goku/Regular/Goku_0-41.png';
		if (character.position.x > 100) {
			character.position.x -= 10
		}
	}
	else if (Key.isDown('w')){
		character.source = 'js/characters/Goku/Regular/Goku_0-24.png'
		if (character.position.y > 100) character.position.y -= 10;	
	}
	else if (Key.isDown('s')){
		if (character.position.y < 800){
			character.position.y += 10
			character.source = 'js/characters/Goku/Regular/Goku_0-29.png'
		}		
	}
	else if (gokuPunchConfirmation) {
		character.onFrame = attackPunch
	}
	else if (gokuKickConfirmation) {
		character.onFrame = attackKick
	}
	else if (gokuKiBlastConfirmation) {
		character.onFrame = attackKiBlast
		kiBlastAppear = true
	}
	else if (kameHameWave) {
		character.onFrame = attackSS
		SS = true
	}
	else if (event.count % 10 == 0) {
		i++;
		if (i > 5) {
			i = 0;
		}
		character.source = gokuSteadyState[i]
	}
}

character.onFrame = actionGoku

// VEGETA CODE

function actionVegeta(event){

	if (Key.isDown('right')){
		other_character.source = 'js/characters/Vegeta/Regular/Vegeta_0-36.png'
		if(other_character.position.x < 1400) {
			other_character.position.x += 10
		}
	}
	else if (Key.isDown('left')){
		other_character.source = 'js/characters/Vegeta/Regular/Vegeta_0-34.png'
		if(other_character.position.x > 100) {
			other_character.position.x -= 10
		}
	}
	else if (Key.isDown('up')){
		other_character.source = 'js/characters/Vegeta/Regular/Vegeta_0-24.png'
		if(other_character.position.y > 100) {
			other_character.position.y -= 10
		}
	}
	else if (Key.isDown('down')){
		other_character.source = 'js/characters/Vegeta/Regular/Vegeta_0-29.png'
		if(other_character.position.y < 800) {
			other_character.position.y += 10
		}
	}
	else if (event.count % 10 == 0) {
		l++;
		if (l > 5) {
			l = 0;
		}
		other_character.source = vegetaSteadyState[i]
		vegetaHitEffects.visible = false
	}	
}


other_character.onFrame = actionVegeta

function onKeyDown(event) {
	//Goku Moves
	if (event.key == 'j') {
		gokuPunchConfirmation = true;
		hitResult1()
	}
	else if  (event.key == 'k') {
		gokuKickConfirmation = true;
		hitResult2()
	}
	else if (event.key == 'u') {
		gokuKiBlastConfirmation = true;
	}
	else if (event.key == 'i') kameHameWave = true;
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
	else if (event.key == 'i') kameHameWave = false;

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