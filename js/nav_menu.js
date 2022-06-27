 // Всплывающая навигация 
 jQuery(document).ready(function() {
     $(document).on('scroll', scrollPage);

     $("#top_main_nav_menu").css('position', 'fixed');
     $("#top_main_nav_menu").css('top', -$("#top_main_nav_menu").height());
     $("#top_main_nav_menu").css('right', 0);
     $("#top_main_nav_menu").css('left', 0);
     $("#top_main_nav_menu").css('z-index', 1030);


     function scrollPage() {
         var top = $(window).scrollTop();
         console.log(top);


         if (top > $("#main_nav_menu").offset().top + $("#main_nav_menu").height()) {
             $("#top_main_nav_menu").css('top', 0);
         } else {
             $("#top_main_nav_menu").css('top', -$("#top_main_nav_menu").height());
         }
     }

 });


 // Каталог - верхнее меню
 jQuery(document).ready(function() {

     $("#category_nav_menu1 .left_content .row").children('.nav_item').on('mouseenter', function() {
         id = this;
         elements = $("#category_nav_menu1").children('.right_content');
         $(elements).each(function(index) {
             // alert($(elements[index]).data('page') + "=" + $(id).data('page'));
             if ($(elements[index]).data('page') == $(id).data('page')) {
                 $(elements[index]).show();
                 // alert("show");
             } else {
                 $(elements[index]).hide();
             }
         })
     });

     $("#category_nav_menu2 .left_content .row").children('.nav_item').on('mouseenter', function() {
         id = this;
         elements = $("#category_nav_menu2").children('.right_content');
         $(elements).each(function(index) {
             // alert($(elements[index]).data('page') + "=" + $(id).data('page'));
             if ($(elements[index]).data('page') == $(id).data('page')) {
                 $(elements[index]).show();
                 // alert("show");
             } else {
                 $(elements[index]).hide();
             }
         })
     });

     console.log($("#category_nav_menu").children('.right_content'));
     elements = $("#category_nav_menu").children('.right_content');
     $(elements).each(function(index) {
         console.log($(elements[index]).data('page'));
         if (index != 0)
             $(elements[index]).hide();
     })

     console.log($("#category_nav_menu .left_content .row").children('.nav_item'));
     elements = $("#category_nav_menu .left_content .row").children('.nav_item');
     $(elements).each(function(index) {
         console.log($(elements[index]).data('page'));
     })




 });