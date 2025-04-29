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

// Function to start music
function startMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(error => {
        console.log("Audio playback failed: ", error);
    }); // Attempt to play the audio
}

// Check if music should be playing
window.onload = function() {
    startMusic(); // Start music when the page loads
};

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




// Detect screenshot attempts
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Show overlay when the page is hidden (potential screenshot)
        document.getElementById('screenshotOverlay').style.display = 'block';
    } else {
        // Hide overlay when the page is visible again
        document.getElementById('screenshotOverlay').style.display = 'none';
    }
});



