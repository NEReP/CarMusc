// получаем массив всех вкладок
const tabs = document.querySelectorAll(".switch_toggle");
// получаем массив всех блоков с содержимым вкладок
const contents = document.querySelectorAll(".switch_tab");
 
// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		// сначала нам нужно удалить активный класс именно с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tab--active");
      
		// теперь нужно удалить активный класс с блоков содержимого вкладок
		let tabContent= event.target.parentElement.parentElement.nextElementSibling;
		let tabContentChildren=tabContent.children;

		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}
		// добавляем активный класс
		contents[i].classList.add("content--active");
 
	});
}

document.addEventListener("DOMContentLoaded", 
function(){
   document.getElementById("burger").addEventListener("click", function(){
      document.querySelector("header").classList.toggle("open");
   })
},

)
document.getElementById('button-nav').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("servies-block")
element.scrollIntoView({
   behavior:"smooth"
});
}


var slider1 = new Swiper (".main-slider", {
   navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
      
   },
   slidesPerView:3,
   slidesPerGroup:3,
   spaceBetween: -95,
   loop: true,

   breakpoints:{
      100: {
         slidesPerGroup:1,
         slidesPerView:1,
         spaceBetween: 0,
     },
      300: {
         slidesPerGroup:1,
         slidesPerView:1,
         spaceBetween: 0,
     },
      400: {
         slidesPerView:1,
         spaceBetween:-50,


     },
      

      700: {
         slidesPerView:2,
         spaceBetween: -40,

     },
      
      800: {
         slidesPerView:2,
         spaceBetween: -50,

     },
      900: {
         slidesPerView:3,
         spaceBetween: 0,

     },
     
     1200:{
      slidesPerView:3,
      spaceBetween: -45,

     },
     
     1350:{
      slidesPerView:3,
      spaceBetween:-60,

     },
     1400:{
      slidesPerView:3,
      spaceBetween: -70,

     },
     1500:{
      spaceBetween: -95,
      slidesPerView:3,

     }
     

   }
   

}) 
var slider2 = new Swiper (".about-advantages_slider", {
   navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
      
   },
   loop: true
})






