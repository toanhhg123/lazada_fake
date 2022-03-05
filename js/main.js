const header = document.querySelector('header');
const bodyElement = document.querySelector('.body');
const iconMenuListDown = document.querySelector('.header-body-foot-category i');

const menuListDown = document.querySelector('.header-body-foot-category');



menuListDown.onmouseover = ()=>{
    iconMenuListDown.className = 'bi bi-chevron-up';
}

menuListDown.onmouseleave = ()=>{
    iconMenuListDown.className = 'bi bi-chevron-down';

}





bodyElement.style.marginTop = `${header.offsetHeight }px`
console.log('heder',header.offsetHeight);
