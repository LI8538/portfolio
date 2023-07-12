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
const fleche = document.querySelector(".fleche");
      fleche.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
