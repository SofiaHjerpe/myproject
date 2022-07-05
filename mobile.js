const navSlide= () =>{
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
const navLinkss = document.querySelectorAll('.navlinks li ');
//toggle nav
    burger.addEventListener('click',()=>{

   nav.classList.toggle('nav-active');
   //animate links
   navLinkss.forEach((link, index) =>{
    if (link.style.animation) {
       link.style.animation = '';
    }
    else {
      link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 1.2}s`;
    }
 });
//  burger animation
burger.classList.toggle('toggle');
 
 
 });

}


  navSlide();
