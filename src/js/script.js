var sliderImgs = document.querySelectorAll(".figure__image");
var images = ["childhood1.jpg", "childhood2.jpg", "childhood3.jpg", 
"childhood4.jpg", "childhood5.jpg", "childhood6.jpg"]

var i = 0;

function prev(){
    if (i === 0){
        return;
    }
    else if (i > 0 && i <= images.length - 1){
        i--;
        return setImg();
    }
}

function next(){
    if (i === images.length - 1){
        return;
    }
    else if (i >= 0 && i < images.length - 1){
        i++;
        return setImg();
    }
}

function setImg(){
    return sliderImgs[0].setAttribute('src', 'images/' + images[i])
}

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}

function close(){
    // mainMenu.style.display = 'none';
    mainMenu.style.top = '-100%';


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


