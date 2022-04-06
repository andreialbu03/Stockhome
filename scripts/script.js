/* UNIT 5 WORK */


// TAB FEATURE FOR THE LEARN PAGE

// Function for the tab feature on the Learn Page
function openTab(event, tab_class) 
{
    // Get all elements corresponding to the tab feature
    var tab_buttons = document.getElementsByClassName("tablink");
    var tab_contents = document.getElementsByClassName("tab");

    // Make all the elements in the tab_contents variable hidden
    for (var i=0; i < tab_contents.length; i++) 
    {
        tab_contents[i].style.display = "none";
    }

    // Remove the "active" class for the elements in the tab_buttons variable
    for (var i=0; i < tab_buttons.length; i++) 
    {
        tab_buttons[i].classList.remove("active");
    }

    // Make the content corresponding to the clicked button visible and add the class "active" to the clicked button
    document.getElementById(tab_class).style.display = "block";
    event.target.classList.add("active");
}


// ACCORDION FEATURE FOR THE FAQ PAGE

// Function for the accordion feature on the FAQ Page
function toggleAccordion(event)
{
    // Toggle the "active" class for the button that was clicked
    this.classList.toggle("active");

    // Get the element immediately following the button that was clicked, the accordion content
    const accordion_content = this.nextElementSibling;

    // If the accordion content is visible, make it hidden and vice versa
    if (accordion_content.style.display == "block")
    {
        accordion_content.style.display = "none"
    }
    else
    {
        accordion_content.style.display = "block";
    }
}

// Get all the elements with the "accordion" class
const accordion_buttons = document.getElementsByClassName("accordion");

// Convert the accordion_buttons variable to an array and iterate through each element it stores with the forEach function
Array.from(accordion_buttons).forEach(element => {
    // Add an event listener to each element in "accordion_buttons" using an arrow function
    element.addEventListener('click', toggleAccordion);
});


// FORM VALIDATION FOR THE CONTACT PAGE

// Get data form form fields
const userName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const error_list = document.querySelectorAll(".error");
const success = document.getElementById("success");

const inputs = [userName, email, subject, message];

// Function called each time the contact form is submitted
function validateForm() 
{  
    clearMessages();
    var error = false;

    // Conditionals to check various form fields
    if (userName.value.length == 0) 
    {
        // call the showError function and pass in the element and the index of the error_list array
        showError(userName, 0);
        error = true;
    }

    if (email.value.length == 0) 
    {
        showError(email, 1);
        error = true;
    }
    else if (!checkEmail()) 
    {
        showError(email, 1,  true);
        error = true;
    }

    if (subject.value.length == 0) 
    {
        showError(subject, 2);
        error = true;
    }

    if (message.value.length == 0) 
    {
        showError(message, 3);
        error = true;
    }

    // If no errors are fouund, display success message
    if (!error) 
    {
        success.textContent = "Thanks for your message!";
    }
}


// Function to display error messages
function showError(element, id, invalid_email=false) 
{
    // Add the class "show-error" to the element
    element.classList.add("show-error");

    // Switch statment to display the correct error message according to the element that was passed in
    switch(element) 
    {
        case userName:
            error_list[id].textContent = "Please enter your name";
            break;

        case email:
            // If invalid_email is true, tell user the email is invalid
            if (invalid_email) 
            {
                error_list[id].textContent = "Please enter a valid email address";
                break;
            }
            // If invalid_email is false, tell user the email is required
            else 
            {
                error_list[id].textContent = "Please enter your email";
                break;
            }
            
        case subject:
            error_list[id].textContent = "Please enter a subject";
            break;

        case message:
            error_list[id].textContent = "Please enter a message";
            break;
    }
}


// Function to clear the messages on the screen
function clearMessages() 
{
    success.textContent = "";

    for (var i=0; i < error_list.length; i++) 
    {
        error_list[i].textContent = "";
    }

    for (var i=0; i < inputs.length; i++ ) 
    {
        inputs[i].classList.remove("show-error");
    }
}


// Function to check whether the email is valid
function checkEmail() 
{
    const reg = new RegExp("^[a-z0-9+_.-]+@[a-z0-9.-]+$", "i");

    if (reg.test(email.value))
    {
        return true;
    }

    return false;
}