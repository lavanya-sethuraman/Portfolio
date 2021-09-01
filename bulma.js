(() => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#'+burger.dataset.target);
    const item = document.querySelector('.navbar-end');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    item.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
    });
}
)();
// Initialize all elements with carousel class.
bulmaCarousel.attach('#carousel', {
    slidesToScroll: 3,
    slidesToShow: 4,
    infinite: true,
    pagination: false
});