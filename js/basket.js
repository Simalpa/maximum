jQuery(document).ready(function() {



    $("#basket_ico").on('click',
        function() {
            if ($("#basket").css('right') == -$("#basket").width() + "px") {
                $("#basket").css('right', '0');
            } else {
                $("#basket").css('right', -$("#basket").width());
            }
        });

    $("#basket_the_cross").on('click', function() {
        $("#basket").css('right', -$("#basket").width());
    });
});