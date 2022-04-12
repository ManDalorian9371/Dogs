let opened = document.getElementById('open');
let closed = document.getElementById('closed');
let xMark = document.getElementById('xMark');
let container = document.querySelector('.container');
opened.addEventListener('click', () => container.classList.add('show-footer'));
closed.addEventListener('click', () => container.classList.remove('show-footer'));
xMark.addEventListener('click', () => container.classList.remove('show-footer'));
// go for it
