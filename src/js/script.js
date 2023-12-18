burgericon = document.getElementById('burger');

if (burgericon) {
    burgericon.addEventListener('click', () => {
        const navbarmenu = document.getElementById('nav-links');
        if (navbarmenu) {
            navbarmenu.classList.toggle('is-active');
        }
    });
}

var sliderImgs = document.querySelectorAll(".images");
var images = ["childhood1.jpg", "childhood2.jpg", "childhood3.jpg", "childhood4.jpg", "childhood5.jpg", "childhood6.jpg"];
const prevbtn = document.getElementById('btnprev');
const nextbtn = document.getElementById('btnnext');

var i = 0;

if (prevbtn && nextbtn) {
    prevbtn.addEventListener('click', () => {
        if (i === 0) {
            return;
        } else if (i > 0 && i <= images.length - 1) {
            i--;
            setImg();
        }
    });

    nextbtn.addEventListener('click', () => {
        if (i === images.length - 1) {
            return;
        } else if (i >= 0 && i < images.length - 1) {
            i++;
            setImg();
        }
    });
}

function setImg() {
    sliderImgs.forEach((img, index) => {
        if (index === 0) {
            img.setAttribute('src', 'images/' + images[i]);
        }
    });
}


var sliderImgsEd = document.querySelectorAll(".imgs");
var imagesEd = ["Ethio-Parents-School.jpg", "SOT.jfif", "aau.jpg"];
const prevbtnEd = document.getElementById('btnprevEd');
const nextbtnEd = document.getElementById('btnnextEd');

var j = 0;

if (prevbtnEd && nextbtnEd) {
    prevbtnEd.addEventListener('click', () => {
        if (j === 0) {
            return;
        } else if (j > 0 && j <= imagesEd.length - 1) {
            j--;
            setImgEd();
        }
    });

    nextbtnEd.addEventListener('click', () => {
        if (j === imagesEd.length - 1) {
            return;
        } else if (j >= 0 && i < imagesEd.length - 1) {
            j++;
            setImgEd();
        }
    });
}

function setImgEd() {
    sliderImgsEd.forEach((img, index) => {
        if (index === 0) {
            img.setAttribute('src', 'images/' + imagesEd[j]);
        }
    });
}


