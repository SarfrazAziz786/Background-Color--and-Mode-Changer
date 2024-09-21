var body = document.querySelector('body');
var buttons = document.querySelectorAll('.button');
// Add event listener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var target = event.target;
        var selectedColor = target.id; // Get the ID of the clicked button
        body.style.backgroundColor = selectedColor; // Change background color
    });
});
// Get the radio buttons for dark/light mode
var darkMode = document.getElementById('darkMode');
var lightMode = document.getElementById('lightMode');
if (darkMode && lightMode) {
    // Add event listener for dark mode
    darkMode.addEventListener('change', function (event) {
        var target = event.target;
        if (target.checked) {
            body.style.backgroundColor = '#333'; // Set to dark mode (dark grey color)
            body.style.color = 'white'; // Change text color to white
        }
    });
    // Add event listener for light mode
    lightMode.addEventListener('change', function (event) {
        var target = event.target;
        if (target.checked) {
            body.style.backgroundColor = 'white'; // Set to light mode (white background)
            body.style.color = 'black'; // Change text color to black
        }
    });
}
