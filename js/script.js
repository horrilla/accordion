"use strict";

const accordion = document.querySelectorAll('.accordion');

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', () => {
		accordion[i].classList.toggle('active');
		let panel = accordion[i].nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}


// const accordion = document.querySelector('.accordion'),
// 	  accItem = accordion.querySelectorAll('.accordion-item'),
// 	  accBody = accordion.querySelectorAll('.accordion-body');
//
//
//
//
// for(let i = 0; i < accItem.length; i++) {
//
// 	accItem[i].addEventListener('click', function (e) {
//
// 		if(accBody[i].classList.contains('hide')) {
// 			accBody[i].classList.add('show');
// 			accBody[i].classList.remove('hide');
// 			accBody[i].style.height = "170px";
// 		} else {
// 			accBody[i].classList.add('hide');
// 			accBody[i].classList.remove('show');
// 		}
//
//
// 		for(let y = 0; y < accBody.length; y++) {
// 			if(accBody[i] !== accBody[y]) {
// 				accBody[y].classList.add('hide');
// 				accBody[y].classList.remove('show');
// 			}
// 		}
//
// 	});
//
// }

// из высоты всего аккордеона вычитать общую высоту всех айтемов и подставлять в высоту блока с текстом






