$(document).ready(function() {
    $('.oc_video .owl-carousel').owlCarousel({
      loop: true,
      margin: 6,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 10000, // Thời gian giữa các slide
      autoplayHoverPause: true, // Tạm dừng autoplay khi di chuột vào carousel
      autoplaySpeed: 1000, // Thời gian tự động cuộn giữa các slide
      animateOut: 'fadeOut', // Hiệu ứng chuyển đổi cho slide hiện tại
      animateIn: 'fadeIn', // Hiệu ứng chuyển đổi cho slide tiếp theo
      responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 2
      }
      },
      
    })
    })
    




    let menu = document.querySelector('.menu');
    let toogle = document.querySelector('.icon_bars');

    toogle.addEventListener("click", function() {
        menu.classList.toggle('open');
      });


      const searchIcon = document.querySelector('.icon_search');
      const searchResults = document.querySelector('.search_results');
      const closeIcon = document.querySelector('.close_search');
      
      searchIcon.addEventListener('click', () => {
          searchResults.style.display = 'block';
      });
      
      closeIcon.addEventListener('click', () => {
          searchResults.style.display = 'none';
      });
      

