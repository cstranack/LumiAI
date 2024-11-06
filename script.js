// Rotate only the background, leaving the eyes stationary
anime({
    targets: '.background',
    rotate: '1turn',
    duration: 8000,
    easing: 'linear',
    loop: true
});

// Function to create random eye blinks with proper reset of eye height
function blink() {
    anime({
        targets: '.eye',
        scaleY: 0.2,
        duration: 100,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false,
        complete: () => { // Ensure eyes return to original size after blinking
            anime({
                targets: '.eye',
                scaleY: 1,
                duration: 50,
                easing: 'easeInOutQuad'
            });
        }
    });
}

// Function to create synchronized, larger-range eye movement with randomized pause
function moveEyes() {
    anime({
        targets: '.eye-container',
        translateX: () => anime.random(-20, 20), // Increased range to allow more movement
        translateY: () => anime.random(-20, 15), // Increased vertical range
        duration: 600, // Original speed for movement
        easing: 'easeInOutQuad',
        complete: () => {
            // Randomized pause between movements (minimum 1000ms)
            setTimeout(moveEyes, anime.random(1000, 4000));
        }
    });
}

// Schedule blinks at random intervals
function randomBlink() {
    blink();
    setTimeout(randomBlink, anime.random(1000, 4000)); // Blinks every 1 to 4 seconds
}

// Start animations
moveEyes();
randomBlink();
