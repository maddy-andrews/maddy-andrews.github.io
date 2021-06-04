$(document).ready(function () {
    console.log("Hello world");
  
    $(".row").click(function () {
      $(this).find(".content").slideToggle("fast");
    });
  });
  $(document).ready(function () {
    console.log("Hello world");
  
    $(".row2").click(function () {
      $(this).find(".content2").slideToggle("fast");
    });
  });
  $(document).ready(function () {
    console.log("Hello world");
  
    $(".row2").click(function () {
      $(this).find(".vid").slideToggle("fast");
    });
  });
  $(document).ready(function () {
    console.log("Hello world");
  
    $(".row3").click(function () {
      $(this).find(".content3").slideToggle("fast");
    });
  });

  

  (function () {
    var inner = ('#inner');
    inner.on('click', function (e) {
        inner
            .hide()
            .off();
    });
});