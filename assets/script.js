// <==========({[Card Animation Handler]})==========>
function cardAnimation(selector, delay, duration = 7.5) {
    document.querySelector(selector).style.visibility = 'hidden'
    setTimeout(() => {
        document.querySelector(selector).style.animation = `loopPopUp ${duration}s infinite`
        document.querySelector(selector).style.visibility = 'visible'
    }, delay);
}

if (!window.matchMedia("(max-width: 768px)").matches) {
    cardAnimation('.card1', 900)
    cardAnimation('.card2', 600)
    cardAnimation('.card3', 1200)
    cardAnimation('.card4', 1900)
    cardAnimation('.card5', 1300)
    cardAnimation('.card6', 700)
    cardAnimation('.card7', 400)
    cardAnimation('.card8', 1400)
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