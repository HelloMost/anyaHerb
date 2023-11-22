//1.
document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(function () {
        document.querySelector("h1").classList.add("fade-in");
        document.querySelector("p").classList.add("fade-in");
    }, 500);
});


//2.
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to animate the picture when it's in the viewport
function animateCapsule() {
    const picture = document.querySelector('.capsule');
    
    if (isInViewport(picture)) {
        picture.style.opacity = '1';
        picture.style.transform = 'translateY(0)';
    }
}

// Attach a scroll event listener to trigger the animation
window.addEventListener('scroll', animateCapsule);

// Initially trigger the animation if the picture is in the viewport when the page loads
document.addEventListener('DOMContentLoaded', animateCapsule);




// Function to apply the scaling effect when the picture is in the viewport
function scalePicture() {
    const picture = document.querySelector('.capsule');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate the position of the picture relative to the viewport
    const rect = picture.getBoundingClientRect();
    const distanceFromTop = rect.top;
    
    // Calculate the scaling factor based on the distance from the top
    const scaleFactor = 1 + (distanceFromTop / viewportHeight);
    
    
    // Apply the scaling effect to the picture
    picture.style.transform = `scale(${scaleFactor})`;
}

// Attach a scroll event listener to trigger the scaling effect
window.addEventListener('scroll', scalePicture);

// Initial trigger for the scaling effect
document.addEventListener('DOMContentLoaded', scalePicture);


//flower//

function animateFlower() {
    const picture1 = document.querySelector('.flower');
    
    if (isInViewport(picture1)) {
        picture1.style.opacity = '1';
        picture1.style.transform = 'translateY(0)';
    }
}

window.addEventListener('scroll', animateFlower);

document.addEventListener('DOMContentLoaded', animateFlower);




function scalePicture1() {
    const picture1 = document.querySelector('.flower');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate the position of the picture relative to the viewport
    const rect = picture1.getBoundingClientRect();
    const distanceFromTop = rect.top;
    
    // Calculate the scaling factor based on the distance from the top
    const scaleFactor = 1 + (distanceFromTop / viewportHeight);
    
    // Apply the scaling effect to the picture
    picture1.style.transform = `scale(${scaleFactor})`;
}

// Attach a scroll event listener to trigger the scaling effect
window.addEventListener('scroll', scalePicture1);

// Initial trigger for the scaling effect
document.addEventListener('DOMContentLoaded', scalePicture1);
