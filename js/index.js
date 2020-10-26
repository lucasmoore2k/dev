	


//buttons manipulation
	var trampos = null;
	var hobbies = null;
	var lucas = null;
	var count = 1;
	function block1(){
		trampos = document.getElementById('div_trampos');
		hobbies = document.getElementById('div_hobbies');
		lucas = document.getElementById('div_lucas');
		trampos.style.display = 'none';
		hobbies.style.display = 'none';
		lucas.style.display = 'block';

		if(count==0){
			count = 1;
			lucas.style.display = 'none'
		}else{
			count = 0;
			lucas.style.display = 'block'
		}
	}

		function block2(){
		trampos = document.getElementById('div_trampos');
		hobbies = document.getElementById('div_hobbies');
		lucas = document.getElementById('div_lucas');
		trampos.style.display = 'block';
		hobbies.style.display = 'none';
		lucas.style.display = 'none';

			if(count==0){
			count = 1;
			trampos.style.display = 'none'
		}else{
			count = 0;
			trampos.style.display = 'block'
		}
	}


	function block3(){
		trampos = document.getElementById('div_trampos');
		hobbies = document.getElementById('div_hobbies');
		lucas = document.getElementById('div_lucas');
		trampos.style.display = 'none';
		hobbies.style.display = 'block';
		lucas.style.display = 'none';


			if(count==0){
			count = 1;
			hobbies.style.display = 'none'
		}else{
			count = 0;
			hobbies.style.display = 'block'
		}
	}

