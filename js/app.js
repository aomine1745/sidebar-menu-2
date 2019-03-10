const wall = document.querySelector('.wall'),
x = document.querySelector('.x'),
icon = document.querySelector('.icon'),
nav = document.getElementById('nav');
icon.addEventListener('click', () => {
	icon.classList.toggle('active');
	nav.classList.toggle('active');
	wall.classList.remove('wall-none');
	wall.classList.remove('wall-effect');
	wall.classList.toggle('x');
	if (!wall.classList.contains('x')) {
		vanished()
	}
});
wall.addEventListener('click', vanished);
function vanished(){
	wall.classList.add('wall-effect');
	nav.classList.remove('active');
	icon.classList.remove('active');
	wall.classList.remove('x');
	setTimeout(none, 500);
}
function none(){
	wall.classList.add('wall-none');
	wall.classList.remove('wall-effect');
}