// Get all assistant buttons on the page
const buttons = document.querySelectorAll("button");

// Add an event listener to each button
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("This feature is coming soon!");
    });
});
