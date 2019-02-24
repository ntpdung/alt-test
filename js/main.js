
var sectionElement, navElement, sectionPosition;

sectionElement = document.getElementById('sec2');
navElement = document.getElementById('fixedNav');
sectionPosition = sectionElement.offsetTop;

window.addEventListener('scroll', function(event) {
    var xFromTop = this.scrollY;

    if (xFromTop > sectionPosition) {
        navElement.style.transition = 'all 0.5s ease-out';
        navElement.style.transform = 'translateY(0)';
        navElement.style.animationDuration = 1000;
        navElement.style.animationTimingFunction = 'linear';
        navElement.style.animationFillMode = 'forwards';
    }
    else {
        navElement.style.transition = 'all 0.5s ease-out';
        navElement.style.transform = 'translateY(-100px)';
        navElement.style.animationDuration = 1000;
        navElement.style.animationTimingFunction = 'linear';
        navElement.style.animationFillMode = 'forwards';
    }
})