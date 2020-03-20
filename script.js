
$(document).ready(function(){
    $(".nav-link").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
        var no = $(this).attr("no");
        $("." + no)removeClass("view").addClass("hide");
        $(this).addClass("view");
    })
});

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
  });
});
