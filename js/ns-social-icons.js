$(document).ready(function() {
    $('.social-share-buttons span').each(function(index, el) {
        $(this).hover(function() {
            $('.osflare-flyout[data-type="' + $(this).attr('data-type') + '"] .osflare-flyout-inner').show();
        });
    });

    $('.osflare-flyout .osflare-flyout-inner').hover(function() {}, function() {
        $(this).hide();
    });
});


/*    var currentMousePos = { x: -1, y: -1 };
    $( $('.osflare-flyout[data-type="facebook"] .osflare-flyout-inner') ).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        console.log('x: '+ currentMousePos.x );
        console.log('y: '+ currentMousePos.y );

    });*/