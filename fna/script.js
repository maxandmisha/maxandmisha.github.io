document.addEventListener('DOMContentLoaded', function() {
    const freddyImage = document.getElementById('freddy-image');
    const freddySlider = document.getElementById('freddy-slider');
    const freddyAudio = document.getElementById('freddy-audio');

    freddyAudio.volume = 0; // Initial volume still 0

    let audioStarted = false; // Flag to track if audio has started

    freddySlider.addEventListener('input', function() {
        const transparencyValue = freddySlider.value;
        const opacity = transparencyValue / 100; // Convert slider value to opacity (0 to 1)
        freddyImage.style.opacity = opacity;

        const volumeValue = transparencyValue / 100;
        freddyAudio.volume = volumeValue;

        // Start audio playback only on the FIRST slider input
        if (!audioStarted) {
            freddyAudio.play().catch(error => {
                console.error("Error starting audio:", error); // Log any play errors
            });
            audioStarted = true; // Set flag to true after starting
        }
    });
});