document.onmousemove = animateCircles; // circle follow mouse


function animateCircles(event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle); // adds function to body

    // adds motion
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    // adds animation
    circle.style.transition = "all 0.45s linear 0s";

    circle.style.left = circle.offsetLeft + 'px';
    circle.style.top = circle.offsetTop + 'px';
    circle.style.opacity = 0;
}

