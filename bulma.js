(() => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#'+burger.dataset.target);
    const item = document.querySelector('.navbar-end');
    burger.addEventListener('click', function() {
        burger.classList.add('is-active');
        menu.classList.add('is-active');
    });

    item.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
    });
})();
