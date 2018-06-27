//start header slider

var slideIndex = 1;

function showSlidesArrows(n) { 
	var slides = document.querySelectorAll('.slider__item');



	if(n > slides.length) {
		slideIndex = 1;
	}

	if(n < 1) {
		slideIndex = slides.length;
	}

	for(i=0;i<slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';

}

function plusSlide(n) {
	showSlidesArrows(slideIndex += n) 
}

showSlidesArrows(slideIndex);

var prev = document.querySelector('.prev'),
	next = document.querySelector('.next');

next.onclick = function() {
	plusSlide(1);
	
}

prev.onclick = function() {
	plusSlide(-1);
	
}

//end of header slider

//start of toggle nav__btn

var navBtn  = document.querySelector('.nav__btn'),
	navList = document.querySelector('.nav'),
	closeBtn = document.querySelector('.nav__closebtn');

navBtn.onclick = function() {
	
	navList.style.height = '100%';
}

closeBtn.onclick = function() {
	navList.style.height = '0%';
}

//end of toggle nav__btn

//start of new-items and hot-items sliders

var dots   = document.querySelectorAll('.dot'),
	dotsHotItems = document.querySelectorAll('.dot-hot-items'),
	slides = document.querySelectorAll('.products'),
	slidesHotItems = document.querySelectorAll('.products-hot-items');

function showSlidesDots(n, slide, dot) {
	
		



	if(n > slide.length) {
		slideIndex = 1;
	}

	if(n < 1) {
		slideIndex = slide.length;
	}

	for(i=0;i<dot.length; i++) {
		dot[i].classList.remove('active')
	}

	for(i=0;i<slide.length; i++) {
		slide[i].style.display = 'none';
	}

	slide[slideIndex - 1].style.display = 'flex';
	dot[slideIndex - 1].classList.add('active');
}

function currentSlide(n, slide, dot) {
	showSlidesDots(slideIndex = n, slide, dot)
}



showSlidesDots(slideIndex, slides, dots);
showSlidesDots(slideIndex, slidesHotItems, dotsHotItems);

for(i=0;i<dots.length; i++) {
	dots[i].onclick = function() {
		if(this == dots[0]) {
			currentSlide(1, slides, dots)
		}
		if(this == dots[1]) {
			currentSlide(2, slides, dots)
		}
		if(this == dots[2]) {
			currentSlide(3, slides, dots)
		}
	}
}

for(i=0;i<dotsHotItems.length; i++) {
	dotsHotItems[i].onclick = function() {
		if(this == dotsHotItems[0]) {
			currentSlide(1, slidesHotItems, dotsHotItems)
		}
		if(this == dotsHotItems[1]) {
			currentSlide(2, slidesHotItems, dotsHotItems)
		}
		if(this == dotsHotItems[2]) {
			currentSlide(3, slidesHotItems, dotsHotItems)
		}
	}
}

//end of new-items and hot-items sliders

//start of smooth scrolling script

var back2top = document.querySelector('.back2top__link');

back2top.onclick = function(e) {

	e.preventDefault();

	document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}
