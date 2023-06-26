document.addEventListener("DOMContentLoaded", 
function(){
   document.getElementById("burger").addEventListener("click", function(){
      document.querySelector("header").classList.toggle("open");
   })
},
function(){
   document.getElementsByClassName("switch_toggle" && `href="tab_1"`).addEventListener("click", function(){
      document.querySelector("tab").classList.toggle("open");
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




