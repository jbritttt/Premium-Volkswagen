


// applies styles to header on scroll

window.onscroll = function () {
  let className = "inverted";
  let scrollTrigger = 60;
  const tableContainer = document.querySelector(".table-container");
  const header = document.getElementsByTagName("header")[0].classList;

  if (window.scrollY >= scrollTrigger) {
    header.add(className);
  }



  //if table data is visable then keep the color of black when scrolling up
  else if (
    window.scrollY <= scrollTrigger &&
    tableContainer.style.display == "block"
  ) {
    header.add(className);
  } else {
    header.remove(className);
  }
};



// intersection observer/ slide in affect on text content

const cards = document.querySelectorAll(".intersect");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  }
);
cards.forEach((card) => {
  observer.observe(card);
});



//scrolls smoothly to elements on the page at breakpoints

$(function () {
  if ($(window).width() > 393) {
    $(".jump-to-form").click(function () {
      $("html,body").animate({ scrollTop: $("#L1").offset().top - 210 }, 1500);
      return false;
    });
  }
});

$(function () {
  if ($(window).width() < 393) {
    $(".jump-to-form").click(function () {
      $("html,body").animate({ scrollTop: $("#L1").offset().top - 235 }, 1500);
      return false;
    });
  }
});

$(function () {
  $(".jump-to-slider").click(function () {
    $("html,body").animate({ scrollTop: $("#L2").offset().top - 145 }, 1500);
    return false;
  });
});


// vanilla navigation menu open and close

let openOrClosed = 1;

function openMenu() {
  let headerWrapper = document.querySelector(".header-wrapper");
  let nav = document.querySelector("nav");
  let hamburgerBarOne = document.querySelector(".bar-1");
  let hamburgerBarTwo = document.querySelector(".bar-2");
  let hamburgerBarthree = document.querySelector(".bar-3");

  if (openOrClosed == 1) {
    headerWrapper.style.backgroundColor = "#232728";
    nav.style.transition = "0.5s ease";
    nav.style.left = "0";
    hamburgerBarthree.style.display = "none";
    hamburgerBarOne.style.transform = "rotate(45deg)";
    hamburgerBarTwo.style.transform = "rotate(-45deg)";
    hamburgerBarOne.style.marginBottom = "-11px";

    openOrClosed = 0;
  } else if (openOrClosed == 0) {
    headerWrapper.style.backgroundColor = "inherit";
    nav.style.transition = "0.5s ease";
    nav.style.left = "-20rem";
    hamburgerBarOne.style.transform = "rotate(0deg)";
    hamburgerBarOne.style.marginBottom = "0px";
    hamburgerBarTwo.style.transform = "rotate(0deg)";
    hamburgerBarthree.style.display = "block";
    openOrClosed = 1;
  } else;
}



// Makes search bar drop down on click

$(function () {
  // Dropdown toggle
  $(".fa-search").click(function () {
    console.log("clicked");
    $(this).next(".dropdown-search").slideToggle();
  });
});



// Read more functionality on some grid items

$(function () {
  $(".read-more-wrapper").click(function () {
    // Check if text is more or less
    if ($(this).children(".read-more-btn").text() == "Read More") {
      // Change link text
      $(this).children(".read-more-btn").text("Read Less");

      // Travel up DOM tree to parent, then find any children with CLASS .read-more and slide down
      $(this).parent().children(".read-more").slideDown();
      $(this).children(".down-icon").css("transform", "rotate(-180deg)");
    } else {
      // Change link text
      $(this).children(".read-more-btn").text("Read More");

      // Travel up DOM tree to parent , then find any children with CLASS .read-more and slide up
      $(this).parent().children(".read-more").slideUp();
      $(this).children(".down-icon").css("transform", "rotate(0deg)");
    }
  });
});



// Makes menu items slide down on mobile navigation. * note that if you resize the browsor window from desktop to tablet/mobile screens you will have to refresh the page in order to see it functioning *

$(function () {
  if ($(window).width() < 1115) {
    $(".toggle-mob").click(function () {
     $(this).parent().children(".dropdown-items").slideToggle();
    });
  }
});


// makes mobile nav menu slide back when clicking on enquire link which scrolls to bottom of page

$(function () {
  if ($(window).width() < 1115) {
    $("#enquire-link").click(function () {
    
      openMenu()

    
    });
  }
});


// hide table container when user clicks on close icon

document.querySelector(".close-icon").addEventListener("click", function (e) {
  const tableContainer = (document.querySelector(
    ".table-container"
  ).style.display = "none");
});
