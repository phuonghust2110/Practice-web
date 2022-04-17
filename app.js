const accordion = document.getElementsByClassName('footer-sitemap-item');


for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(e){
       if(e.target.closest('.footer-sitemap-item-child')) return;
       this.classList.toggle('active');
    })
}
