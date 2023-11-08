const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();

  const smoothLinks = document.querySelectorAll('a[href^="#main_web_map"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

function openMaps(evt, mapName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabs_content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabs_btn_item");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(mapName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*const tabItem = document.querySelectorAll('.tabs_btn_item');
const tabContent = document.querySelectorAll('.tabs_content_item');

tabItem.forEach(function(element){
  element.addEventListener('click, open');
})

function open(evt) {
  const tabTarget = evt.currentTarget;

  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn_item_active')
  })

  tabTarget.classList.add('tabs_btn_item_active');
}*/
