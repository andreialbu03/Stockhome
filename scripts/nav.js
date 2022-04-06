/* 
* UNIT 4 WORK
* Code for animating the navbar copied from 
* https://youtu.be/gXkqy0b4M5g
* Accessed: Mar 10, 2022 
*/

// Anonymous function
const navSlide = () => {

    // Select elements using CSS selector
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Add event listener to the elements stored in the burger variable
    burger.addEventListener('click', () => {

        // Toggle the class="nav-active" either on or off
        nav.classList.toggle('nav-active');

        // Animation for the links appearing on the nav bar
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Times the links so they don't all appear at once
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
            }
        });

        // Burger animation for when you click the button; adds or removes the class="toggle"
        burger.classList.toggle('toggle');
    });

}

// Call the function
navSlide();