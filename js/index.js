	


//buttons manipulation
var trampos = null;
var hobbies = null;
var lucas = null;

function block1(){
	trampos = document.getElementById('div_trampos');
	hobbies = document.getElementById('div_hobbies');
	lucas = document.getElementById('div_lucas');
	trampos.style.display = 'none';
	hobbies.style.display = 'none';
	lucas.style.display = 'block';

}


function block2(){
	trampos = document.getElementById('div_trampos');
	hobbies = document.getElementById('div_hobbies');
	lucas = document.getElementById('div_lucas');
	hobbies.style.display = 'none';
	lucas.style.display = 'none';
	trampos.style.display = 'block';

}


function block3(){
	trampos = document.getElementById('div_trampos');
	hobbies = document.getElementById('div_hobbies');
	lucas = document.getElementById('div_lucas');
	trampos.style.display = 'none';
	lucas.style.display = 'none';
	hobbies.style.display = 'block';
}

function getout(){
	trampos = document.getElementById('div_trampos');
	hobbies = document.getElementById('div_hobbies');
	lucas = document.getElementById('div_lucas');
	trampos.style.display = 'none';
	lucas.style.display = 'none';
	hobbies.style.display = 'none';

}

