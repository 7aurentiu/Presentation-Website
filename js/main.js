//mobile menu
let
mobileMenu = document.querySelector('.mobile-nav'),
mobileMenuOpenBtn = document.querySelector('.mobMenuOpen'),
mobileMenuCloseBtn = document.querySelector('.mobMenuClose');
const openMobMenu = (e)=>{
    mobileMenu.style.display = "inline";
    mobileMenu.classList.add('mobmenudown');
    
    e.preventDefault();
}
const closeMobMenu = (e)=>{
    mobileMenu.classList.remove('mobmenudown');
    mobileMenu.classList.add('mobmenuup');
    e.preventDefault();
}
mobileMenuCloseBtn.addEventListener('click', closeMobMenu);
mobileMenuOpenBtn.addEventListener('click', openMobMenu);
