// Initialize an empty string to store the mathematical expression
let string = "";

// Select all elements with the class "button" and store them in the 'buttons' variable
let buttons = document.querySelectorAll(".button");

// Iterate over each button element using Array.from() to convert the NodeList to an array
Array.from(buttons).forEach((button) => {

    // Attach a click event listener to each button
    button.addEventListener('click', (e) => {

        // Check if the clicked button has innerHTML equal to "="
        if (e.target.innerHTML == "=") {

            // Evaluate the mathematical expression stored in 'string'
            string = eval(string);

            // Update the value of the input field with the result
            document.querySelector('input').value = string;

        } else if (e.target.innerHTML == 'C') {

            // If the clicked button has innerHTML equal to 'C', reset the string to an empty value
            string = "";

            // Update the value of the input field to reflect the empty string
            document.querySelector('input').value = string;

        } else {

            // If the clicked button is neither "=" nor 'C', concatenate its innerHTML to the 'string'
            string = string + e.target.innerHTML;

            // Update the value of the input field to reflect the updated 'string'
            document.querySelector('input').value = string;

        }
    })
});
