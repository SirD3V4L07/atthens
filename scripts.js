
// Get the input element
var promptInput = document.getElementById('promptInput');

// Add a keydown event listener to the input element
promptInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is the Enter key
    if (event.key === 'Enter') {
        // Change content view
        paintContent();
    }
});

function paintContent () {
    let content = document.getElementById("content");
    
    if (promptInput.value == "test") {
        content.textContent = "Pass";
    }

    if (promptInput.value == "test2") {
        content.textContent = "Pass2";
    }

    promptInput.value = "";

}

window.onload = function() {
    var inputElement = document.getElementById('promptInput');
    inputElement.focus(); // Focus on the input element when the page loads

    // Ensure the input retains focus if the user tries to interact with other elements
    inputElement.addEventListener('blur', function() {
        inputElement.focus();
    });
};