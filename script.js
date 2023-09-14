var parallaxElements;
var mousePosition = [0,0];
document.onmousemove = handleMousePos;

var pageIsReady = false;
$(window).on('load', function() { // Page fade in
    $("#loader-wrapper").fadeOut(700);
    pageIsReady = true;

    parallaxElements = document.querySelectorAll('[data-parallax-factor]');
});

console.log("> ============\nHi there, if you're looking in here, I assume you're a web developer who wants to make their own resume website. If you want an easier look at the website code, all of it is publicly available on my github at https://www.github.com/DucksIncoming/EngineeringPortfolio :)\n> ============")

function handleMousePos(event) {
    var eventDoc, doc, body;

    event = event || window.event;

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    mousePosition = [event.pageX, event.pageY];
    if (pageIsReady){
        parallaxHandler(mousePosition);
    }
}

function parallaxHandler(mousePosition) {
    let w = window.innerWidth;
    let h = window.innerHeight;

    let relToCenterPos = [mousePosition[0] - (w / 2), mousePosition[1] - (h / 2)];

    for (let i = 0; i < parallaxElements.length; i++){
        if (w > 600){
            let parallaxStrength = parseInt(parallaxElements[i].getAttribute("data-parallax-factor"));
        parallaxElements[i].style.left = (50 + (-relToCenterPos[0] / (10 * parallaxStrength))).toString() + "%";
        parallaxElements[i].style.top = (50 + (-relToCenterPos[1] / (10 * parallaxStrength))).toString() + "%";
        }
        else {
            parallaxElements[i].style.left = 50;
        parallaxElements[i].style.top = 50;
            
        }
        
    }
}