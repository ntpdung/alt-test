
var sectionElement, navElement, sectionPosition;

sectionElement = document.getElementById('sec2');
navElement = document.getElementsByTagName('nav');
sectionPosition = sectionElement.offsetTop;

window.addEventListener('scroll', function(event) {
    var xFromTop = this.scrollY;

    if (xFromTop > sectionPosition) {
        navElement[0].classList.add("fixedNav");
    }
    else {
        navElement[0].classList.remove('fixedNav');
    }
})