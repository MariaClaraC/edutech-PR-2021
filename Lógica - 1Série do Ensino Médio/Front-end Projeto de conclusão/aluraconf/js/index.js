smoothScroll('a[href*=part-sobre]');
smoothScroll('a[href*=part-palestrantes]');
smoothScroll('a[href*=part-form]');

function smoothScroll(busca) {

    $(busca).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 550);  
    });
}

