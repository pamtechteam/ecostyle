const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible-animation');
		} else {
            entrada.target.classList.remove('visible-animation');
        }
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
});

window.addEventListener('scroll', function(){
    var elementsAnimated = document.querySelectorAll('.appear-anim');

    elementsAnimated.forEach(function(elemento) {
        observador.observe(elemento)
    })
})