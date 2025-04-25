// Prevent right-click on images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Prevent screenshot (not fully effective, but can deter casual users)
document.addEventListener('keydown', function(e) {
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        alert("Screenshots are not allowed.");
    }
});

// Prevent zooming with Ctrl + Mouse Wheel
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent zooming with pinch gestures on touch devices
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
});
// Check the password
function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = "119"; // Replace with your actual password

    if (passwordInput === correctPassword) {
        // Hide the modal and remove the blur effect
        document.getElementById('passwordModal').style.display = 'none';
        document.getElementById('content').classList.remove('blurred');
        document.body.classList.remove('modal-open'); // Remove class to allow background interaction
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Optionally, disable keyboard shortcuts for opening developer tools
document.addEventListener('keydown', function(event) {
    // Disable F12 (Developer Tools), Ctrl+Shift+I (Inspect), Ctrl+U (View Source)
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});
// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
});

// Show the modal on page load
window.onload = function() {
    document.getElementById('passwordModal').style.display = 'flex'; // Use flex to center the modal
    document.body.classList.add('modal-open'); // Add class to body to prevent background interaction
};

// Function to enable keyboard input
function enableKeyboardInput() {
    document.addEventListener('keydown', handleKeyDown);
}

// Function to disable keyboard input
function disableKeyboardInput() {
    document.removeEventListener('keydown', handleKeyDown);
}






