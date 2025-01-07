const header = document.querySelector('.header');
const header_nav = document.querySelector('.header-nav');
const header_trigger = document.querySelector('.header-trigger');
let animationComplete = false;
let animation2Complete = true;

header_trigger.addEventListener('mouseenter', () => {

    if(animation2Complete){
        header_trigger.style.animation = 'slideUp 0.3s ease-out forwards';
        header_nav.style.animation = 'slideDown 0.3s ease-out forwards';
        header_nav.style.backdropFilter = 'blur(8px)';
        header_nav.style.display = 'flex';
        animation2Complete = false;
        setTimeout(() => {
            header_trigger.style.display = 'none';
            animationComplete =  true;
        }, 300);
    }
});

header_nav.addEventListener('mouseleave', () => {

    if(animationComplete){
        header_trigger.style.animation = 'slideDown 0.3s ease-out forwards';
        header_nav.style.animation = 'slideUp 0.3s ease-out forwards';
        header_trigger.style.display = 'flex';
        animationComplete = false;
    
        setTimeout(() => {
            header_nav.style.display = 'none';
            animation2Complete = true;
        }, 300);
    }
});