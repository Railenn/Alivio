




const burger = document.querySelector('.header__burger');

const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');
const burgerContainer = document.querySelector('.burger__container')
const burgerItems = document.querySelector(".open__items");


const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const pageHeight = document.body.scrollHeight;




let blurValue = '10';

burger.addEventListener('click', function() {
		





	




	header.style.filter = `blur(${blurValue}px)`;
	main.style.filter = `blur(${blurValue}px)`;
	footer.style.filter = `blur(${blurValue}px)`;


	burgerOpen.style.display = 'block';

	document.body.style.overflow = "hidden";



	burgerOpen.style.height = `${pageHeight}px`;


	if (burgerContainer.scrollHeight < window.innerHeight) 
	{
		burgerItems.style.flexDirection = "column";
	};

	if (burgerContainer.scrollHeight > window.innerHeight)
	{
		burgerItems.style.flexDirection = "row";
	};


});

burgerClose.addEventListener('click', function() {

	document.body.style.overflow = 'visible';

	header.style.filter = 'blur(0px)';
	main.style.filter = 'blur(0px)';
	footer.style.filter = 'blur(0px)';

	burgerOpen.style.display = 'none';

	burgerOpen.style.height = '0px';

});

window.addEventListener("keyup", function(e) {
	if (e.which == 27 && burgerOpen.style.display == 'block'){

		burgerOpen.style.display = 'none';
		document.body.style.overflow = 'visible';
		header.style.filter = 'blur(0px)';
		main.style.filter = 'blur(0px)';
		footer.style.filter = 'blur(0px)';

	}
})

const advice = document.querySelector(".main-advice");
const about = document.querySelector(".main-about");
const story = document.querySelector(".story");
const product = document.querySelector(".product");


function scrollToBlock(block) {

		if (typeof block === 'undefined')
		{
			window.scrollTo({
				top: 0,

				left: 0,

				behavior: 'smooth'
			
			})
		}

		if (block.scrollHeight < window.innerHeight)
		{

				block.scrollIntoView({
				
					block: 'center',

					behavior: 'smooth'

				})

		}




		if (block.scrollHeight > window.innerHeight || block.scrollHeight == window.innerHeight)
		{


			window.scrollTo({
			
				top: block.getBoundingClientRect().top,
				
				left: 0,

				behavior: "smooth"

			})

		}


}


function checkProperties() {
		
		if (document.body.style.overflow == "hidden")
		{

			burgerOpen.style.display = "none";

			header.style.filter = "blur(0px)";
			main.style.filter = "blur(0px)";
			footer.style.filter = "blur(0px)";
		
			document.body.style.overflow = "visible";

		};

}

let toTop;


window.addEventListener('click', function(e) {
	
	if (e.target.classList.contains('item-advice')) {
		scrollToBlock(advice);
		checkProperties();
	};

	if (e.target.classList.contains('item-about')) {
		scrollToBlock(about);
		checkProperties();
	};

	if (e.target.classList.contains('item-story')) {
		scrollToBlock(story);
		checkProperties()
	};

	if (e.target.classList.contains('item-product')) {
		scrollToBlock(product);
		checkProperties()
	};
	
	if (e.target.classList.contains('item-top')) {
		scrollToBlock(toTop)
		checkProperties()
	}
});




let windowBreakPointWidth = 768;


window.addEventListener("resize", function() {
	if (burgerOpen.style.display == "block" && window.innerWidth > windowBreakPointWidth) {
		checkProperties();
	}
})