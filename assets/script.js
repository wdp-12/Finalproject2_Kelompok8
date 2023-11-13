// <==========({[Card Animation Handler]})==========>
function cardAnimation(selector, animationName, delay, duration = 7.5) {
    document.querySelector(selector).style.visibility = 'hidden'
    setTimeout(() => {
        document.querySelector(selector).style.animation = `${animationName} ${duration}s infinite`
        document.querySelector(selector).style.visibility = 'visible'
    }, delay);
}

if (!window.matchMedia("(max-width: 768px)").matches) {
    cardAnimation('.card1', 'loopPopUp', 1200)
    cardAnimation('.card2 .card-content', 'loopPopUp', 1600)
    cardAnimation('.card3 .card-content', 'loopPopUp', 800)
    cardAnimation('.card4 .card-content', 'loopPopUp', 1000)
    cardAnimation('.card5 .card-content', 'loopPopUp', 1400)
    cardAnimation('.card6 .card-content', 'loopPopUp', 600)
    cardAnimation('.card7 .card-content', 'loopPopUp', 2000)
    cardAnimation('.card8', 'loopPopUp', 1800)
    cardAnimation('.features-content .card1', 'loopPopUp', 1400)
    cardAnimation('.features-content .card2 .card-content', 'loopPopUp', 1800)
    cardAnimation('.features-content .card3 .card-content', 'loopPopUp', 600)
    cardAnimation('.features-content .card4 .card-content', 'loopPopUp', 1200)
    cardAnimation('.features-content .card5 .card-content', 'loopPopUp', 1600)
    cardAnimation('.features-content .card6 .card-content', 'loopPopUp', 800)
    cardAnimation('.features-content .card7 .card-content', 'loopPopUp', 1000)
    cardAnimation('.features-content .card8', 'loopPopUp', 2000)
    cardAnimation('.product1 .product-content', 'rollDown', 1200, 6.8)
    cardAnimation('.product2 .product-content', 'rollDown', 1000, 6.8)
    cardAnimation('.product3 .product-content', 'rollDown', 800, 6.8)
}

// <==========({[Smooth Scroll Handler]})==========>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// <==========({[Menu Toggle Handler]})==========>
document.querySelector('.menu-icon-sm').addEventListener('click', () => {
    const menuItems = document.querySelector('.wrapper-sm');

    if (menuItems.style.display === 'flex') {
        menuItems.style.opacity = '0'
        menuItems.style.transform = 'translateY(-15px)'
        setTimeout(() => {
            menuItems.style.display = 'none'
        }, 400);
    } else {
        menuItems.style.display = 'flex'
        menuItems.style.opacity = '1'
        menuItems.style.transform = 'translateY(0)'
    }
})