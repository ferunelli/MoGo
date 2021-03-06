$(function () {
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed header */

  checkScroll(scrollOffset);
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      //   console.log("More");
      header.addClass("header--fixed");
    } else {
      header.removeClass("header--fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");
    $("#nav").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  /* NAV Toggle*/
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /* Collaps */
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    var $this = $(this),
      blockId = $this.data("collapse");
    $("#accordion .accordion__item").removeClass("active");
    $this.toggleClass("active");
  });

  //   Slider
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    sildesToShow: 1,
    slidesToScroll: 1,
  });
});
