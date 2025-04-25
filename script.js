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
