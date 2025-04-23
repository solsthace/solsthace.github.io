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
