document.addEventListener('DOMContentLoaded', function() {
    const planktonImage = document.getElementById('plankton-image');
    const planktonSlider = document.getElementById('plankton-slider');
    const planktonAudio = document.getElementById('plankton-audio');

    planktonAudio.volume = 0; // Initial volume still 0

    let audioStarted = false; // Flag to track if audio has started

    planktonSlider.addEventListener('input', function() {
        const transparencyValue = planktonSlider.value;
        const opacity = transparencyValue / 100;
        planktonImage.style.opacity = opacity;

        const volumeValue = transparencyValue / 100;
        planktonAudio.volume = volumeValue;

        // Start audio playback only on the FIRST slider input
        if (!audioStarted) {
            planktonAudio.play().catch(error => {
                console.error("Error starting audio:", error); // Log any play errors
            });
            audioStarted = true; // Set flag to true after starting
        }
    });
});