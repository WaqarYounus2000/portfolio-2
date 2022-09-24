// document.getElementById('button1').onclick = ()=>{
//     let page1 = document.getElementById('page1ID');
//     page1.classList.add("page1style");
//     console.log('krdy hai')

//     let page2 = document.getElementById('page2ID');
//     page2.classList.add('page2style');
//     console.log('ye b hogya')

// }
var page1 = document.getElementById('page1ID');
var page2 = document.getElementById('page2ID');

document.getElementById('button1').onclick = () => {
	page1.style.height = '0vh';
	page2.style.height = '100vh';
	const loadedcard = document.getElementsByClassName('infocard1');
	for(let i=0;i<4;i++){
		loadedcard[i].style.opacity = "1";

	}

}

document.getElementById('button2').onclick = () => {
	page1.style.height = '100vh';
	page2.style.height = '0vh';


}

/////////////////////////////////////////////////////////////////////



var _CONTENT = [
	"WORLD!",
	"DEVELOPERS!",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if (text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function () {
			_INTERVAL_VAL = setInterval(Delete, 80);
		}, 2000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if (text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if (_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;

		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function () {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 200);



////////////////////// page 3 ///////////////////////////////////////////////////////////////

document.getElementById('sidearrow').onclick = () => {

	document.getElementById('page2_div2ID').style.width = "0%";
	document.getElementById('page3ID').style.width = "100%";
	

}


document.getElementById('rightarrowID').onclick = () => {

	document.getElementById('page2_div2ID').style.width = "100%";
	document.getElementById('page3ID').style.width = "0%";


}




const card  = document.getElementsByClassName('asscard');
for(let i=0;i<card.length;i++){

	card[i].onmouseover = ()=>{
		document.getElementsByClassName('cardinfo')[i].style.height = '140px';
		document.getElementsByClassName('websiteimag')[i].style.filter = 'blur(1px)';

		document.getElementsByClassName('asscard')[i].onmouseleave = ()=>{
			document.getElementsByClassName('websiteimag')[i].style.filter = 'blur(0px)';
			document.getElementsByClassName('cardinfo')[i].style.height = '0px';

		
		
	}
	
}
}


