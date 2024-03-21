// Function to hide the heart shape when clicked and show the letter
function showLetter() {
    const heart = document.querySelector('.heart');
    const container = document.querySelector('.container');
    const h1 = document.querySelector('h1');
     const h2 = document.querySelector('h2');

    // Hide the heart shape
    heart.style.display = 'none';

    // Show the letter
    container.style.display = 'block';
    h1.style.display = 'none';
    h2.style.display = 'none';
}

// Add event listener to the heart element
document.querySelector('.heart').addEventListener('click', showLetter);

document.addEventListener('DOMContentLoaded', function () {
    const imagesContainer = document.querySelector('.images-container');
    const showImagesButton = document.querySelector('.show-images-button');
    const backgroundMusic = document.getElementById('background-music');

    // Hide images container initially
    imagesContainer.style.display = 'none';

    // Function to show images and play background music
    function showImagesAndPlayMusic() {
        // Show images
        imagesContainer.style.display = 'block';
        // Play background music
        backgroundMusic.play();
    }

    // Add event listener to the button
    showImagesButton.addEventListener('click', showImagesAndPlayMusic);
});
