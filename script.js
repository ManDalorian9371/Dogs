let opened = document.getElementById('open');
let closed = document.getElementById('closed');
let xMark = document.getElementById('xMark');
let contact = document.getElementById('contact');
let about = document.getElementById('about');
let home = document.getElementById('home');
let container = document.querySelector('.container');

opened.addEventListener('click', () => container.classList.add('show-footer'));
closed.addEventListener('click', () => {
	container.classList.remove('show-footer');
	document.querySelector('.popuptext').classList.remove('active');
});
xMark.addEventListener('click', () => {
	container.classList.remove('show-footer');
	document.querySelector('.popuptext').classList.remove('active');
});
home.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
about.addEventListener('click', () => window.open('https://mostafa-rafati.netlify.app/'));
contact.addEventListener('click', () => {
	document.querySelector('.popuptext').classList.toggle('active');
});
// go for it
function sendEmail(){
	var link = 'mailto:mostafarafati888@gmail.com';
	window.location.href = link;
}
var link = 'mailto:mostafarafati888@gmail.com';
