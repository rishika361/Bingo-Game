
//fix the nav bar
function handleScroll() {
    var nav = document.querySelector("nav");
    var scrollY = window.scrollY || window.pageYOffset;


    var threshold = 0;

    if (scrollY > threshold) {
        nav.classList.add("fixed-nav"); 
    } else {
        nav.classList.remove("fixed-nav"); 
    }
}

window.addEventListener("scroll", handleScroll);






//For the popup
//Instruction
document.addEventListener("DOMContentLoaded", function () {
const aboutLink = document.getElementById("instruction-link");
const popupContainer = document.getElementById("instruction-popup-container");
const closeButton = document.getElementById("instruction-close-button");

// Function to open the popup
function openPopup() {
    popupContainer.style.display = "block";
}

// Function to close the popup
function closePopup() {
    popupContainer.style.display = "none";
}

// Event listeners
aboutLink.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
});







// Rules
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("rules-link");
    const popupContainer = document.getElementById("rules-popup-container");
    const closeButton = document.getElementById("rules-close-button");
    
    // Function to open the popup
    function openPopup() {
        popupContainer.style.display = "block";
    }
    
    // Function to close the popup
    function closePopup() {
        popupContainer.style.display = "none";
    }
    
    // Event listeners
    aboutLink.addEventListener("click", openPopup);
    closeButton.addEventListener("click", closePopup);
    });







    // About
    document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link");
    const popupContainer = document.getElementById("about-popup-container");
    const closeButton = document.getElementById("about-close-button");
    
    // Function to open the popup
    function openPopup() {
        popupContainer.style.display = "block";
    }
    
    // Function to close the popup
    function closePopup() {
        popupContainer.style.display = "none";
    }
    
    // Event listeners
    aboutLink.addEventListener("click", openPopup);
    closeButton.addEventListener("click", closePopup);
    });
