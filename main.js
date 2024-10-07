document.addEventListener('DOMContentLoaded', function() {
    // Toggle More Dropdown on click
    const moreToggle = document.querySelector('.more-dropdown a');
    const moreDropdownMenu = document.querySelector('.more-sub-menu');

    moreToggle.addEventListener('click', function(e) {
        e.preventDefault();
        moreDropdownMenu.classList.toggle('show');
    });

    // Close More Dropdown if clicked outside
    window.onclick = function(event) {
        if (!event.target.closest('.more-dropdown')) {
            moreDropdownMenu.classList.remove('show');
        }
    };
});

// Sidebar 1 toggle
document.getElementById("modalButton1").onclick = function() {
    document.getElementById("mySidebar1").style.width = "250px";
}
document.getElementById("closeSidebar1").onclick = function() {
    document.getElementById("mySidebar1").style.width = "0";
}

// Sidebar 2 toggle
document.getElementById("modalButton2").onclick = function() {
    document.getElementById("mySidebar2").style.width = "300px";
}
document.getElementById("closeSidebar2").onclick = function() {
    document.getElementById("mySidebar2").style.width = "0";
}


   //  start Carousel code. 10 items......
   $(document).ready(function(){
    $(".owl-carousel-1").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items:8
        },
        600: {
          items: 10
        },
        1200: {
          items: 10
        }
      }
    });
  });
  // End Carousel code.............
  
     //  start Carousel code. 6 items......
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});
 // End Carousel code.............

 // Start carousel news page......
 var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
// End carousel news page......
