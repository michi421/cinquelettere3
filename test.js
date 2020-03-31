//
var imagenames = ["piano", "piede", "pieno", "piuma", "ruota", "sedia", "siepe", "suola", "suono", "suora", "viale", "viola", "zaino"];
var lastrng = 0;
var imagerng;
var correct;


function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function newimage() {
    while (true) {
        imagerng = Math.floor(Math.random() * 100);

        if (imagerng <= 13) {
            if (imagerng != 0) {
                if (imagerng != lastrng) {
                    if (imagerng != undefined) {
                        lastrng = imagerng;
                        var urltocheck = './res/images/' + imagenames[imagerng] + '.png'
                        if(UrlExists(urltocheck)){
                            document.getElementById('image').setAttribute("src", urltocheck);
                        }
                        else {
                            newimage();
                            break;
                        }
                        break;
                    }
                }
            }
        }
    }
}

function check() {
    if (document.getElementById('text').value.length == 5) {
        document.getElementById('text').setAttribute("readonly", true);
        if (document.getElementById('text').value.toLowerCase() == imagenames[imagerng]) {
            correct = true;
        } else {
            correct = false;
        }
        setTimeout(hidecontrols, 2000);
    }
}

var hidecontrols = function () {

    if (correct) {
        document.getElementById('emo').setAttribute("src", './res/smiley/smile' + imagerng + '.gif');
        console.log("si");
        newimage();

    } else {
        document.getElementById('emo').setAttribute("src", './res/ops.gif');
        console.log("no")
    }


    document.getElementById('image').style.visibility = "hidden";
    document.getElementById('text').style.visibility = "hidden";
    document.getElementById('emo').style.visibility = "visible";
    document.getElementById('text').value = null;

    setTimeout(showcontrols, 3000);
}

var showcontrols = function () {
    document.getElementById('image').style.visibility = "visible";
    document.getElementById('text').style.visibility = "visible";
    document.getElementById('emo').style.visibility = "hidden";
    document.getElementById('text').focus();
    document.getElementById('text').removeAttribute("readonly")

}