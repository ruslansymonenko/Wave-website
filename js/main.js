$(function() {
    var mixer = mixitup('.gallery__photos');

    console.log('yes');
    $("#mygallery").justifiedGallery(
        {
            rowHeight: 280,
            maxRowsCount: 2,
            margins: 10,
        }
    );

    $(".youtube-link").grtyoutube();

    $('.blog__slider').slick(
        {
            arrows: false,
            dots: true,
        }
    );
})