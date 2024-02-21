
/** Listen for Enter/Return key on user input */
var promptInput = document.getElementById('promptInput');

// Add a keydown event listener to the input element
promptInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is the Enter key
    if (event.key === 'Enter') {
        // Change content view
        paintContent();
    }
});


/** Paint content depending on user input */
function paintContent () {
    let content = document.getElementById("content");
    
    if (promptInput.value == "menu") {
        content.innerHTML = mainMenuContent;
    }

    if (promptInput.value == "home") {
        content.innerHTML = homeContent;
    }

    if (promptInput.value == "archive") {
        content.innerHTML = archiveContent;
    }

    if (promptInput.value == "about") {
        content.innerHTML = aboutContent;
    }

    promptInput.value = "";
}


/** Maintain focus on input box */
window.onload = function() {
    var inputElement = document.getElementById('promptInput');
    inputElement.focus(); // Focus on the input element when the page loads

    // Ensure the input retains focus if the user tries to interact with other elements
    inputElement.addEventListener('blur', function() {
        inputElement.focus();
    });
};