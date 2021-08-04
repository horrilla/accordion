"use strict";



const accItem = document.querySelectorAll('.accordion-item'),
	  accBody = document.querySelectorAll('.accordion-body');


for(let i = 0; i < accItem.length; i++) {
	accItem[i].addEventListener('click', function () {
		if(accBody[i].classList.contains('hide')) {
			accBody[i].classList.add('show');
			accBody[i].classList.remove('hide');
		} else {
			accBody[i].classList.add('hide');
			accBody[i].classList.remove('show');
		}

		for(let y = 0; y < accBody.length; yz++) {
			if(accBody[i] !== accBody[y]) {
				accBody[y].classList.add('hide');
				accBody[y].classList.remove('show');
			}
		}

	});

}





