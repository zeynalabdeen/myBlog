
// SHRINK NAVBAR 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("navbar").style.boxShadow = "2px 1px 1px 0 rgba(0, 0, 0, 0.301)";
    document.getElementById("whatsapp").style.display = "flex";
  } else {
    document.getElementById("navbar").style.background = "0";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("whatsapp").style.display = "none";
  }
}



// Hamburger MENU

const menuBtn = document.querySelector('.menu');
let menuOpen = false;
let navigation = document.querySelector('.navigation');
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        navigation.classList.add('active');
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        navigation.classList.remove('active');
    }
})



// Intersection OBSERVER

const abouts = document.querySelectorAll('.about');

observer = new IntersectionObserver(entries =>{
  entries.forEach(entry=>{
    
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = 'about 2s forwards ease';
    }

  })

})

abouts.forEach(about =>{
  observer.observe(about);
})











