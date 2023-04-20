
// HAMBURGER ICON
const hamburgerIcon = document.querySelector(".hamburger-icon");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

// I dont need this anymore - I changed from mouse activation
// to a click activation for the hamburger menu. 
// nav.addEventListener("mouseleave", () => {
//   nav.classList.remove("show-nav");
// });



//TESTAMONIALS SECTION switch between the 2 testamonials every 7 seconds automatically
// Get all testimonnials in an array
const testimonials = document.querySelectorAll('.testimonial');

// Set initial testimonial index to 0
let activeTestimonial = 0;

// Show initial testimonial
testimonials[activeTestimonial].classList.add('active');

// Set interval to switch active testimonial every 7 seconds
setInterval(() => {
  // Hide current active testimonial
  testimonials[activeTestimonial].classList.remove('active');
  
  // Move to next testimonial or loop back to first testimonial
  activeTestimonial = (activeTestimonial + 1) % testimonials.length;
  
  // Show new active testimonial
  testimonials[activeTestimonial].classList.add('active');
}, 7000);



//I was going to create a subscribe pop up that appears automatically
//after 5 or so second when opening the webpage but I have run out of time
//to do this. I did add some initial html code for this but haven't used it. 