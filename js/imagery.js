 // Образы - кнопка раскрыть описание

 jQuery(document).ready(function() {
     btn_show_description = document.querySelectorAll('.show_description');
     jQuery(btn_show_description).on('click', clickBtn);


     function clickBtn() {
         parent = jQuery(this).parent('.fashion_page_description');
         description = parent.children('.row').children('.hide_description');

         if (jQuery(description).is(':hidden')) {
             jQuery(description).show();
             jQuery(this).text('Скрыть описание');
         } else {
             jQuery(description).hide();
             jQuery(this).text('Просмотреть описание');
         }
     }
 });