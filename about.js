console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been successfully submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', ()=>{
	alert('You are great at hovering over the rubber duck!')
})