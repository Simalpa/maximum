// Скролл элементов

function scroll(scroll_id) {
    let speed = 1; // Скорость скролла.

    let scroll = document.querySelector(scroll_id);

    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.

    scroll.addEventListener('mousedown', function(e) {
        drag = true;
        coorX = e.pageX - this.offsetLeft;
        left = scroll.scrollLeft;
    });
    document.addEventListener('mouseup', function() {
        drag = false;
        left = scroll.scrollLeft;
    });
    scroll.addEventListener('mousemove', function(e) {
        if (drag) {
            this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX) * speed * -1;
        }
    });

};

function nextItem(pos, speed) {
    jQuery('.scroll2').animate({
        scrollLeft: pos
    }, speed, 'swing', function() {});

}

jQuery(document).ready(function() {
    jQuery("#arrow_right_scroll2").on('click', function() {
        left = jQuery('.scroll2').scrollLeft();
        width = jQuery('.scroll2').children('.previously_watched_item').outerWidth();
        offset = left % width;
        if (width - left < 2) offset = 0;
        nextItem(left - offset + width, 500);
    });

    jQuery("#arrow_left_scroll2").on('click', function() {
        left = jQuery('.scroll2').scrollLeft();
        width = jQuery('.scroll2').children('.previously_watched_item').outerWidth();
        if (left - width < 2) offset = 0;
        offset = left % width;
        nextItem(left + (width - offset) - width, 500);
    });

    /*  scrollSize = 0;
      posMouse = 0;

      left = jQuery('.scroll2').on('mousedown', function(e) {
          posMouse = e.pageX;
      });

      left = jQuery('.scroll2').on('mouseup', function(e) {
          left = jQuery('.scroll2').scrollLeft();
          width = jQuery('.scroll2').children('.previously_watched_item').outerWidth();
          offset = left % width;
          if (width - left < 2) offset = 0;

          if (posMouse - e.pageX > 0)
              nextItem(left - offset + width, 500);
          else
              nextItem(left + (width - offset) - width, 500);
      });*/


});


scroll('.scroll');
scroll('.scroll2');