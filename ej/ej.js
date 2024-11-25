// JavaScript to handle video interaction
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-video");
    const videoElement = document.getElementById("video-element");
  
    playButton.addEventListener("click", () => {
      // Scroll to the video section if not already in view
      videoElement.scrollIntoView({ behavior: "smooth" });
  
      // Play the video
      videoElement.play();
    });
  });
  