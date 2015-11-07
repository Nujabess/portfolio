(function() {
    $body = $(document);
    $nav = $body.find('.nav');
    $ham = $body.find('.hamburger');
    $thumb = $('.thumbnails').find('img');
    $displayImage = $('.img-right').find('img');
    tm = TweenMax;

    $ham.on('click', function() {
      $nav.toggleClass('hide');
    });

    $thumb.on('click', function() {
        var src = $(this).attr('src');

        $displayImage.attr('src', src);
        tm.fromTo($displayImage, 0.5, {opacity: 0}, {opacity: 1})
    });
})();