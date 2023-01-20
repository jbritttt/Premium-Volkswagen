// move styles to css on friday morning


let openOrClosed = 1;


function openMenu() {
  let headerWrapper = document.querySelector(".header-wrapper");
  let nav = document.querySelector("nav");
  let hamburgerBarOne = document.querySelector(".bar-1");
  let hamburgerBarTwo = document.querySelector(".bar-2");
  let hamburgerBarthree = document.querySelector(".bar-3");

  if (openOrClosed == 1) {
    headerWrapper.style.backgroundColor = "#232728";
    nav.style.transition ='0.5s ease';
    nav.style.left = "0";
    hamburgerBarthree.style.display = "none";
    hamburgerBarOne.style.transform = "rotate(45deg)";
    hamburgerBarTwo.style.transform = "rotate(-45deg)";
    hamburgerBarOne.style.marginBottom = "-11px";

    openOrClosed = 0;
  } else if (openOrClosed == 0) {
    headerWrapper.style.backgroundColor = "inherit";
    nav.style.transition ='0.5s ease';
    nav.style.left = "-20rem";
    hamburgerBarOne.style.transform = "rotate(0deg)";
    hamburgerBarOne.style.marginBottom = "0px";
    hamburgerBarTwo.style.transform = "rotate(0deg)";
    hamburgerBarthree.style.display = "block";
    openOrClosed = 1;
  } else;
}

let className = "inverted";
let scrollTrigger = 60;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};



// intersection observer/ slide in affect on text content

const cards = document.querySelectorAll('.intersect')

const observer = new IntersectionObserver(entries =>{
entries.forEach(entry =>{

entry.target.classList.toggle('show', entry.isIntersecting)

if (entry.isIntersecting) observer.unobserve(entry.target)

})
},
{
threshold:.4



})
cards.forEach(card => {
   
    
    
    observer.observe(card)

})
