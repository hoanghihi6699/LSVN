
// Maxtext
$(".label_title").each(function () {
    if ($(this).text().length > 170) {
        $(this).text($(this).text().substr(0, 170));
        $(this).append('...');
    }
});
// Timeline

$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
    $.js('timeline-carousel').slick({
        infinite: true ,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
}

carousel();