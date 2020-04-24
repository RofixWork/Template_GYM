//navigation search

let openBtn = document.getElementById('open'),
    closeBtn = document.getElementById('close');
    searchTab = document.getElementById('search'),
    btnScroll = document.querySelector('.top');
    //add class active
let elemLi = document.querySelectorAll('.navbar .nav-item .nav-link');

elemLi.forEach(function (elem) { 
    
    elem.onclick = () => {
        for(let i = 0; i < elemLi.length; i++) {
            elemLi[i].classList.remove('active')
        }
        elem.classList.add('active');
    }
})

openBtn.onclick = function (){
    searchTab.classList.add('open')
}

closeBtn.addEventListener('click', () => {
    searchTab.classList.remove('open')
})

//navbar
var navbar = document.querySelector('.navbar');
console.log(navbar);
window.onscroll = function () {  
    if(document.scrollingElement.scrollTop > 40){
        navbar.style.backgroundColor = 'rgba(0,0,0,1)';
    } else navbar.style.backgroundColor = 'transparent';
    if(document.scrollingElement.scrollTop > 100) {
        btnScroll.style.opacity = '1';
        btnScroll.style.visibility = 'visible';
    } else{
        btnScroll.style.opacity = '0';
        btnScroll.style.visibility = 'hidden';
    } 
}

//scrool top button

btnScroll.onclick = function () {
    document.scrollingElement.scrollTop = 0;
}

$(function() {  
    $("body").niceScroll({
        cursorborder: "1px solid #f36100",
        zindex: "9999",
        "cursorcolor": "#f36100",
        mousescrollstep: 50
    });
});

