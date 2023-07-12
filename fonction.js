/*----------Mode jourNuit--------*/



        const toggle_btn = document.getElementById('theme-btn');

        const service = document.getElementsByClassName('service');

const body = document.getElementsByTagName('body')[0];

console.log('toggle_btn',toggle_btn);

const dark_theme_class = 'dark';

toggle_btn.addEventListener('click', function() {

 if (body.classList.contains(dark_theme_class)) {
 body.classList.remove(dark_theme_class);

}

 else {

 body.classList.add(dark_theme_class);

};


if (toggle_btn.innerText ==='🌙') {
  toggle_btn.innerText= '🌝';
  service.add.classList('serviceChangeColor');

}else{
  toggle_btn.innerText= '🌙';
  service.add.classList('serviceChangeColor');
}

});

/*----------fleche retourne en haut de page--------*/
// scrolltotop.js

// Execute a function when the window is being scrolled
window.onscroll = function () { scrollFunction() };

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  // Get the button
    var mybutton = document.getElementById("scrollToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}