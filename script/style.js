const blinkTags = document.getElementsByClassName('input-blink');
var visibilityStatus = false;

function blink() {
    for (var i = 0; i < blinkTags.length; i++) {
        if (visibilityStatus) {
            blinkTags[i].style.visibility = 'hidden';
        } else {
            blinkTags[i].style.visibility = 'visible';
        }
    }
    visibilityStatus = !visibilityStatus;
}

setInterval(blink, 500);