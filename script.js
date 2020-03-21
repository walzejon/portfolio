
$(document).ready(function(){
    $(".nav-link").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
        var no = $(this).attr("no");
        // $("." + no)removeClass("view"); this throws an error for some reason.
        $("." + no).addClass("hide");
        $(this).addClass("view");
    })
});

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
  });

  $(document).ready(function() {
    const base_url="https://api.weather.gov/stations/K";
    const endpoint="/observations/latest";
    
  
    // weather update button click
    $('#getwx').on('click', function(e) {
      var mystation = $('input').val();
      var myurl = base_url + mystation + endpoint;
      $('input#my-url').val(myurl);
      
      // clear out any previous data
      $('ul li').each(function() {
        // enter code to clear each li
        $('ul').empty();
      });
        
      console.log("Cleared Elements of UL");
      
      // execute AJAX call to get and render data
      $.ajax({
        url: myurl,
        dataType: "json",
        success: function(data) {
          const wxprop = data['properties'];
          var tempC= wxprop['temperature'].value.toFixed(1);
          var tempF = (tempC * 9/5 + 32).toFixed(1);
          const mps2kts = 1.94384;
  
          var windDirection = wxprop['windDirection'].value.toFixed(0);
          var windDStr = "<li>Current Wind Direction: " + windDirection + " Degrees.</li>";
          $('ul').append(windDStr);
          $('ul li:last').attr('class', 'list-group-item');
  
          var windSpeed = (wxprop['windSpeed'].value * mps2kts).toFixed(1);
          var windSpsStr = "<li>Current Wind Speek: " + windSpeed + " kts.</li>";
          $('ul').append(windSpsStr);
          $('ul li:last').attr('class', 'list-group-item');
          // uncomment this if you want to dump full JSON to textarea
          var myJSON = JSON.stringify(data);
          $('textarea').val(myJSON);
          console.log(myJSON.stringify);
          
          var str = "<li>Current temperature: " + tempC +"C " + tempF+"F"+"</li>";
          $('ul').append(str);
          $('ul li:last').attr('class', 'list-group-item');
  
          var textD = wxprop['textDescription'];
          var icon = '<li><img src="' + wxprop.icon +'">\t' + textD + '</li>';
          $('ul').append(icon);
          $('ul li:last').attr('class', 'list-group-item');
  
          // add additional code here for the Wind direction, speed, weather contitions and icon image
        }
      });
    });
  });


});
