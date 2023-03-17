// hamburger
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".mbl-link").addClass(".mbl-list");
    $(".mbl-link").toggle(".mbl-list");
    $(".hamburger").toggleClass("active");
  });

  // reveal on sliding start
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  //  reveal on sliding  end
  });

// project slick slider

$(".slider-nav").slick({
  pauseOnHover: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  appendDots: $(".slider-dots-box"),
  dotsClass: "slider-dots",

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

// On before slide change
$(".slider-nav")
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".slider-dots-box button").html("");
  })
  .trigger("beforeChange");

// On before slide change
$(".slider-nav")
  .on("afterChange", function (event, slick, currentSlide) {
    $(".slider-dots-box button").html("");
    $(
      ".slider-dots-box .slick-active button"
    ).html(`<svg class="progress-svg " width="40" height="40">
      <g transform="translate(20,20)">
        <circle class="circle-go" r="19" cx="0" cy="0"></circle>
     
      </g>
      </svg>`);
  })
  .trigger("afterChange");

// testimonial slider-2

$(".slider-2").slick({
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  appendDots: $(".slider-dots-box-1"),
  dotsClass: "slider-dots-1",
});
// On before slide change
$(".slider-2")
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".slider-dots-box-1 button").html("");
  })
  .trigger("beforeChange");

// On before slide change
$(".slider-2")
  .on("afterChange", function (event, slick, currentSlide) {
    $(".slider-dots-box-1 button").html("");
    $(
      ".slider-dots-box-1 .slick-active button"
    ).html(`<svg class="progress-svg " width="40" height="40">
    <g transform="translate(20,20)">
      <circle class="circle-go" r="19" cx="0" cy="0"></circle>
   
    </g>
    </svg>`);
  })
  .trigger("afterChange");
