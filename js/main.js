document.addEventListener('DOMContentLoaded', function(){
    // ----info-hint----
    const infoBtns = document.querySelectorAll('.info-dot');
    const infoHints = document.querySelectorAll('.info-hint');
    const circles = document.querySelectorAll('.info-hint__circle');

    for (let btn of infoBtns) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            //hide all hints
            for (let hint of infoHints) {
                hint.classList.add('none');
            }

            //show current hint
            this.parentNode.querySelector('.info-hint').classList.toggle('none');
        });
    }

    // any-click-close
    document.addEventListener('click', closeHints);

    function closeHints() {
        for (let hint of infoHints) {
            hint.classList.add('none');
        }
    }

    for (let hint of infoHints) {
        hint.addEventListener('click', (e) => e.stopPropagation());
    }


    circles.forEach(circle => {
        circle.addEventListener('click', function()  {
            circles.forEach(mark => mark.classList.remove('active'));

            this.classList.add('active');

            const isActive = this.classList.contains('active');

            const imgs = document.querySelectorAll('.hint-mark__img');

            imgs.forEach(img => {
                const isInCurrentCircle = img.closest('.info-hint__circle') === this;
                img.style.display = isActive && isInCurrentCircle ? 'block' : 'none';
            });
        });
    });

    // // ----slider----
    const swiper = new Swiper('.swiper', {
        // loop: true,

        slidesPerView: 1,
        spaceBetween: 42,

        breakpoints: {
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     768: {
        //         slidesPerView: 4,
        //         spaceBetween: 40,
        //     },
        //     1024: {
        //         slidesPerView: 5,
        //         spaceBetween: 50,
        //     },
        // },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            },

        // Navigation arrows
        navigation: {
            nextEl: '#sliderNext',
            prevEl: '#sliderPrev',
        },
    });

    // tabs
    const tabsBtns = document.querySelectorAll('[data-tab]');
    const tabsProducts = document.querySelectorAll('[data-tab-value]');

    for (let btn of tabsBtns) {
        btn.addEventListener('click', function () {
            for (let btn of tabsBtns) {
                btn.classList.remove('tab-controls__btn--active');
            }
            this.classList.add('tab-controls__btn--active');

            for (let product of tabsProducts) {
                if (this.dataset.tab === 'all') {
                    product.classList.remove('none');
                } else {
                    if (product.dataset.tabValue === this.dataset.tab) {
                        product.classList.remove('none');
                    } else {
                        product.classList.add('none');
                    }
                }
            }
            swiper.update();
        })
    }

    // mobile-nav
    const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
    const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
    const mobileNav = document.querySelector('#mobile-nav');

    mobileNavOpenBtn.onclick = function () {
        mobileNav.classList.add('mobile-nav-wrapper--open');
    }

    mobileNavCloseBtn.onclick = function () {
        mobileNav.classList.remove('mobile-nav-wrapper--open');
    };
});