$(document).ready(function(){

  $("#get_color").on('click', function(e){
    e.preventDefault();
    console.log("In click");
    $.ajax({
      type: "post",
      url: "/color",
    }).done(function(response){
      console.log(response);
      $("#color_me li").eq(response.cell).css("background-color", response.color);
    }).fail(function(){
      console.log("fail");
    });
  });

});