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