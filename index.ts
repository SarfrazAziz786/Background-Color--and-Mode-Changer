const body = document.querySelector('body')!;
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const selectedColor = target.id; 
        body.style.backgroundColor = selectedColor; 
    });
});

// Get the radio buttons for dark/light mode
const darkMode = document.getElementById('darkMode') as HTMLInputElement 
const lightMode = document.getElementById('lightMode') as HTMLInputElement 

if (darkMode && lightMode) {
    
    darkMode.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
            body.style.backgroundColor = 'black'; 
            body.style.color = 'white'; 
    });

    // Add event listener for light mode
    lightMode.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
            body.style.backgroundColor = 'white'; 
            body.style.color = 'black'; 
        }
    });
}
