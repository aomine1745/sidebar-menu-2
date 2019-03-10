		const header = document.querySelector('header'),
		icon = document.querySelector('.icon'),
		wall = document.querySelector('.wall');
		icon.addEventListener('click', ()=>{
			header.classList.toggle('active');
			if (wall.classList.contains('wall-none')) {
				wall.classList.remove('wall-none');
			}else{
				wall.classList.add('wall-effect');
				setTimeout(none, 500);
			}
		});
		wall.addEventListener('click', ()=>{
			header.classList.remove('active');
			wall.classList.add('wall-effect');
			setTimeout(none, 500);
		});
		function none(){
			wall.classList.remove('wall-effect');
			wall.classList.add('wall-none');
		}