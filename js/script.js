"use strict";

const accordion = document.querySelectorAll('.accordion'),
	  text = document.querySelectorAll('.text');

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', () => {
		accordion[i].classList.toggle('active');
		if(text[i].style.maxHeight) {
			text[i].style.maxHeight = null;
		} else {
			text[i].style.maxHeight = text[i].scrollHeight + "px";
		}

		for(let y = 0; y < accordion.length; y++) {
			if(accordion[i] !== accordion[y]) {
				text[y].style.maxHeight = null;
				accordion[y].classList.remove('active');
			}
		}
	});
}


// const accItem = document.querySelectorAll('.accordion-item'),
// 	  accBody = document.querySelectorAll('.accordion-body');
//
//
//
//
// for(let i = 0; i < accItem.length; i++) {
// 	accItem[i].addEventListener('click', function (e) {
// 		accBody[i].classList.toggle('active');
// 		if(accBody[i].style.maxHeight) {
// 			accBody[i].style.maxHeight = null;
// 		} else {
// 			accBody[i].style.maxHeight = accBody[i].scrollHeight + "px";
// 		}
//
//
// 		for(let y = 0; y < accBody.length; y++) {
// 			if(accBody[i] !== accBody[y]) {
// 				accBody[y].style.maxHeight = null;
//
// 			}
// 		}
//
// 	});
//
// }

// из высоты всего аккордеона вычитать общую высоту всех айтемов и подставлять в высоту блока с текстом






