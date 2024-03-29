const body = document.querySelector('body')
const main = document.querySelector('#main')
const sectionOne = document.querySelector('.sec-1')
const sectionTwo = document.querySelector('.sec-2')
const sectionThree = document.querySelector('.sec-3')
const sectionFour = document.querySelector('.sec-4')


// <----------------------- DRAG BUTTON ----------------------->

const snapPoints = [0, 213];
let dragMe = Draggable.create(".dragme", {
    type: "y",
    edgeResistance: 1,
    snap: snapPoints,
    throwProps: true,
    bounds: ".track",
    onDragEnd: getThePosition, 
});

let timeout;
function myFunction() {
  timeout = setTimeout(getThePosition, 3000);
}

function getThePosition() {
    // console.log(this.endY)
    if (this.endY > 106) {
      document.querySelector('.welcome-to-portfolio-block').style.opacity = 0
      document.querySelector('.thank-you-text').style.display = "block"
      document.querySelector('.dragme-child').style.display = "block"
      document.querySelector('.arrow').style.display = "none"
      document.querySelector('.dragme-text').style.opacity= 0
      TweenLite.to('.dragme', {
          y: 213
      })
      setTimeout(function(){
        sectionOne.classList.remove('hide')
        sectionTwo.classList.remove('hide')
        sectionThree.classList.remove('hide')
        sectionFour.classList.remove('hide')
        main.classList.add('hide')
    }, 3000);

    } else {
        document.querySelector('.welcome-to-portfolio-block').style.opacity = 1
        document.querySelector('.thank-you-text').style.display = 'none'
        document.querySelector('.dragme-child').style.display = "none"
        document.querySelector('.arrow').style.display = "block"
        document.querySelector('.dragme-text').style.opacity= 1
        TweenLite.to('.dragme', {
            y: 0
        })
        sectionOne.classList.add('hide')
        sectionTwo.classList.add('hide')
        sectionThree.classList.add('hide')
        sectionFour.classList.add('hide')
        main.classList.remove('hide')
    }
}



// <----------------------- MENU ----------------------->
document.querySelector('.nav-toggle').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.overlay-menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('overflow-menu-overlay');
    document.querySelector('.nav-toggle').classList.toggle('nav-toggle-position');
})

const projectsNav = document.querySelector('#projects-nav')
projectsNav.addEventListener('click', function(){
  document.querySelector('.overlay-menu').style.background='hsl(0deg 0% 0% / 39%)'
})

const homeNav = document.querySelector('#home-nav')
homeNav.addEventListener('click', function(){
  document.querySelector('.overlay-menu').style.background='hsl(0 0% 100% / 0)'
})

const skillsNav = document.querySelector('#skills-nav')
skillsNav.addEventListener('click', function(){
  document.querySelector('.overlay-menu').style.background='hsl(0 0% 100% / 0)'
})

const contactNav = document.querySelector('#contact-nav')
contactNav.addEventListener('click', function(){
  document.querySelector('.overlay-menu').style.background='hsl(0 0% 100% / 0)'
})






// <----------------------- OVERLAYS ----------------------->
const nextProject = document.querySelector('#next-radio')
const overlayNext = document.querySelector('#project-1')
nextProject.addEventListener('click', function() {
    overlayNext.style.width = "100%"
})
function closeNav() {
  overlayNext.style.width = "0%";
}

const ghaniliProject = document.querySelector('#ghanili')
const overlayGhanili = document.querySelector('#project-2')
ghaniliProject.addEventListener('click', function() {
  overlayGhanili.style.width = "100%"
})
function closeNav1() {
  overlayGhanili.style.width = "0%";
}


const threeD = document.querySelector('#threed-design')
const overlayThreeD = document.querySelector('#project-3') 
threeD.addEventListener('click', function() {
    overlayThreeD.style.width = "100%"
  }) 
function closeNav3() {
    overlayThreeD.style.width = "0%";
} 

// const resume = document.querySelector('#my-resume')
// const fourthOverlay = document.querySelector('#resume')
// resume.addEventListener('click', function() {
//   fourthOverlay.style.width = '100%'
// })
// function closeNav4() {
//   fourthOverlay.style.width = "0%";
// } 

// <----------------------------- OPEN TABS   ----------------->
const movieApp = document.querySelector('#movie-app')
function openTab() {
  window.open("https://movie-app-ouss.netlify.app/", "_blank");
}
movieApp.addEventListener('click',function() {
  openTab()
})

const serviceApp = document.querySelector('#service-app')
function openTabTwo() {
  window.open("https://chipper-sundae-892dda.netlify.app/", "_blank");
}
serviceApp.addEventListener('click',function() {
  openTabTwo()
})

const quizzMe = document.querySelector('#quizz-me')
function openTabThree() {
  window.open("https://ouss-hafsi.github.io/Quiz-me/", "_blank");
}
quizzMe.addEventListener('click',function() {
  openTabThree()
})




// <----------------------------- GSAP ANIMATION ----------------------------->

// skills page animation
let skillsSectionAnimation = gsap.timeline({
  scrollTrigger:{
  trigger:'.sec-1',
  start:'bottom center',
  end:'bottom top',
  scrub:'true',
  // markers:true
}})

skillsSectionAnimation.to('.skills-bar', {
  width:'100%'
})

skillsSectionAnimation.to('.skills-img', {
  opacity:'1'
})

skillsSectionAnimation.to('.skills-text', {
  opacity: '1',
  transform: 'translateX(0)',
})

skillsSectionAnimation.fromTo('.resume-btn', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

// projects page animation
let projectSectionAnimation = gsap.timeline({
  scrollTrigger:{
  trigger:'.sec-1',
  start:'200% center',
  end:'200% top',
  scrub:'true',
  // markers:true
}})

projectSectionAnimation.fromTo('.work-examples', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

projectSectionAnimation.fromTo('.container', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

projectSectionAnimation.fromTo('#prev-slide', {
  opacity:0,
  x:-30,
},{
  opacity:1,
  x:0,
  duration:1,
  delay:.5,
})

projectSectionAnimation.fromTo('#next-slide', {
  opacity:0,
  x:30,
},{
  opacity:1,
  x:0,
  duration:1,
  delay:.5,
})

// contact page animation
let contactSectionAnimation = gsap.timeline({
  scrollTrigger:{
  trigger:'.sec-1',
  start:'300% center',
  end:'300% top',
  scrub:'true',
  // markers:true
}})

contactSectionAnimation.fromTo('.lets-talk-img', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

contactSectionAnimation.fromTo('.input-block', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

contactSectionAnimation.fromTo('.input-btn', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

contactSectionAnimation.fromTo('.socialMedia-contactPage', {
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:1,
  delay:.5,
})

// <----------------------------- SLIDER ----------------------------->
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);




