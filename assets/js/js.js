
      $(function () {
         $('.hamburger').click(function () {
            $('.nav-bar').toggleClass('active');
            // 메뉴가 열렸는지 확인
            if ($('.nav-bar').hasClass('active')) {
               $('header').css("background-color", "#1a1a1a");
            } else {
               $('header').css("background-color", "transparent");
            }
         });

         $('.nav-bar a').click(function () {
            $('.nav-bar').removeClass('active');
            $('header').css("background-color", "transparent");
         });
      });



      let lastScroll = 0;
      $(window).on('scroll', function () {
         let scrollTop = $(this).scrollTop();

         if (Math.abs(scrollTop - lastScroll) < 10) return;

         if (scrollTop > lastScroll && scrollTop > 50) {
            $('header').removeClass('fixed');
         } else {
            $('header').addClass('fixed');
         }

         lastScroll = scrollTop;
      });
