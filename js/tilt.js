jQuery(document).ready(function( $ ){
    $('.tilt-img img').tilt({
        perspective: 500,
        glare: true,
        maxGlare: .3,
    });

    $('.tilt-a a').tilt({
        perspective: 500,
        glare: true,
        maxGlare: .3,
    });

    $('.tilt').tilt({
        perspective: 1800,
        glare: false,
    });
});
