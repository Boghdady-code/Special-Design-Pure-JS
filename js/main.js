let landing = document.querySelector(".landing-page");
let settingsBox = document.querySelector(".settings-box");
let settingsButton = document.querySelector(".settings-box .toggle-icon .icon");
let colorsLi = document.querySelectorAll (".settings-box .settings-option .colors-list li");
let spanButtons = document.querySelectorAll (".settings-box .settings-option .button-options span");
let randomOption = true;
let backgroundInterval;


let imageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

let random = Math.floor (Math.random() * imageArray.length);


if (localStorage.getItem("main-color") !== null ) {
  document.documentElement.style.setProperty ("--main-color", localStorage.getItem("main-color"));
  colorsLi.forEach (function(li) {
    li.classList.remove ("active");
    if (li.dataset.color === localStorage.getItem("main-color")) {
      li.classList.add ("active");
    }

  })
}



if (localStorage.getItem("background-option") !== null ) {
  if (localStorage.getItem("background-option") === "true") {
    randomOption = true;
  } else {
    randomOption = false;
  }
  spanButtons.forEach (function(span) {
    span.classList.remove("chosen");
    if (localStorage.getItem("background-option") === "true") {
      document.querySelector(".settings-category .button-options .yes").classList.add("chosen");
    } else{
      document.querySelector(".settings-category .button-options .no").classList.add("chosen");
    }
  }) 

} 



colorsLi.forEach(function (li) {
  
  
  
  li.addEventListener ("click", function (e) {
    document.documentElement.style.setProperty ("--main-color", e.target.dataset.color);
    localStorage.setItem("main-color", e.target.dataset.color);
    colorsLi.forEach (function(li) {
      li.classList.remove("active");


    })
    e.target.classList.add("active");
    
  });

  

})


spanButtons.forEach(function (span) {

  
  
  span.addEventListener ("click", function (e) {
  
    spanButtons.forEach (function(span) {
      span.classList.remove("chosen");


    })
    e.target.classList.add("chosen");
    if (e.target.classList.contains("yes") ) {
      randomOption = true;
      randomImage ();
      localStorage.setItem ("background-option", true);
      
    } else {
      randomOption = false;
      clearInterval (backgroundInterval);
      localStorage.setItem ("background-option", false);
    }

    

    

    
  });

  

})




settingsButton.onclick = function () {
  settingsButton.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
};

function randomImage () {
  if (randomOption === true) {
    backgroundInterval = setInterval (function () {
      let random = Math.floor (Math.random() * imageArray.length);
      landing.style.backgroundImage = `url(../imgs/${imageArray[random]}`;
    },6000);

  }
}

randomImage();


let ourskills = document.querySelector (".our-skills");


window.onscroll = function () {
  let windowHeight = window.innerHeight;
  let skillsHeight = ourskills.clientHeight;
  
  let skillsSectionToHeight = ourskills.offsetHeight;
  
  let scrolling = window.scrollY;

  if (scrolling > (skillsSectionToHeight + skillsHeight - windowHeight)) {
    let allskills = document.querySelectorAll (".our-skills .skill-box .skill-progress span");
    allskills.forEach (function (skill) {
      skill.style.width = skill.dataset.progress;
    })
  }
  
}

// let timeline = document.querySelector(".timeline");

// window.onscroll = function () {
//   let windowHeight = window.innerHeight;
//   let timelineHeight = timeline.clientHeight;
//   let scrolling = window.scrollY;
//   let timelineSectionToHeight = timeline.offsetHeight;
//   if (scrolling > (timelineSectionToHeight + timelineHeight - windowHeight)) {
//     let fillBorder = document.querySelectorAll (".timeline .timeline-content .fill-border");

//     fillBorder.height= "100";

    
//   }
// }

let ourgallary = document.querySelectorAll (".our-gallary .image-box img");

ourgallary.forEach (function (img) {
  img.onclick = function(e) {
    let overlay = document.createElement ("div");
    overlay.className = "overlay-image";
    document.body.appendChild (overlay);
    let popupbox = document.createElement ("div");
    popupbox.className = "popup-box";
    document.body.appendChild (popupbox);
    let image = document.createElement ("img");
    image.className = "popup-image";
    image.src = e.target.src;
    popupbox.appendChild (image);
    let close = document.createElement ("span");
    close.className = "close";
    close.innerHTML = "X";
    popupbox.appendChild (close);
    

  }
})


document.addEventListener ("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentNode.remove();
    document.querySelector(".overlay-image").remove();
  }
})


let allbullets = document.querySelectorAll (".bullets .bullet");
let allLinks = document.querySelectorAll(".landing-page .heading .links a");

function gotoSection (elements) {
  elements.forEach(function (element) {
    element.addEventListener ("click", function (e) {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView ({
        behavior: "smooth"
      })
    })
  })
}

gotoSection(allbullets);
gotoSection(allLinks);