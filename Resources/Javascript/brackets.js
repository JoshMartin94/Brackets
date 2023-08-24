// ------------ Count function --------------
// let counter = 0;
// 
// function count () {
// 	counter++;
// 	document.querySelector('.count-number').innerHTML = counter;
// 	
// 	if (counter % 10 === 0) {
// 		alert(`Next point is game ${counter}`);
// 	}
// }
// 
// let minusCount = counter;
// 
// function minus() {
// 	minusCount--;
// 	document.querySelector('.count-number').innerHTML = minusCount;
// }
// 
// document.querySelector('.plus-button').onclick = count;
// document.querySelector('.minus-button').onclick = minus;

const teamScores = document.querySelectorAll('.team-score');

teamScores.forEach((teamScore) => {
	const minusBtn = teamScore.querySelector('.minus-button');
	const plusBtn = teamScore.querySelector('.plus-button');
	const count = teamScore.querySelector('.count');
	
	let countNum = 0;
	count.innerHTML = countNum;

	minusBtn.addEventListener("click", () => {
		countNum -= 1;
		count.innerHTML = countNum;
	});

	plusBtn.addEventListener('click', () => {
		countNum += 1;
		count.innerHTML = countNum;

		if (countNum % 20 === 0) {
			alert(`Next point is game ${countNum}`);
		}
	});
});