function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

//capsule
function animateCapsule() {
    const picture = document.querySelector('.capsule');
    
    if (isInViewport(picture)) {
        picture.style.opacity = '1';
        picture.style.transform = 'translateY(0)';
    }
}


window.addEventListener('scroll', animateCapsule);

document.addEventListener('DOMContentLoaded', animateCapsule);




function scalePicture() {
    const picture = document.querySelector('.capsule');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    const rect = picture.getBoundingClientRect();
    const distanceFromTop = rect.top;
    
    const scaleFactor = 1 + (distanceFromTop / viewportHeight);
    
    
    picture.style.transform = `scale(${scaleFactor})`;
}

window.addEventListener('scroll', scalePicture);

document.addEventListener('DOMContentLoaded', scalePicture);


//flower

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
    
    const rect = picture1.getBoundingClientRect();
    const distanceFromTop = rect.top;
    
    const scaleFactor = 1 + (distanceFromTop / viewportHeight);
    
    picture1.style.transform = `scale(${scaleFactor})`;
}

window.addEventListener('scroll', scalePicture1);

document.addEventListener('DOMContentLoaded', scalePicture1);
