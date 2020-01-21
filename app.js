const hamburger = document.querySelector('.hamburger');
      menu = document.querySelector('.menu');


hamburger.addEventListener('click', e =>{
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
        
    } else {
        menu.style.display = 'block';
        
    }
});