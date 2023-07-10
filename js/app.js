$(document).ready(function () {

    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll('.progress__bar');
    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let counterSection = document.querySelector('.skills_wrapper');
    let done = 0;

    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            bars.forEach(function (bar) {
                let percentage = bar.dataset.percent;
                let tooltip = bar.children[0];
                tooltip.innerText = percentage + '%';
                bar.style.width = percentage + '%';
            })
        }
    }, options)
    sectionObserver.observe(counterSection);

    //image filter

    var $wrapper = $('.portfolio__wrapper');
    //Initialize isotope
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        let selector = link.dataset.filter;
        link.addEventListener('click', function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');
        });
    })

    //magnify popup

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    })
})