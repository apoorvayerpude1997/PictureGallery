var $overLay = $("<div id ='overLay'></div>");
$("body").append($overLay);
var $image =$("<img>");
$overLay.append($image);
var $close = $("<img id ='closeImage'>");
$overLay.append($close);
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageSource = $(this).attr("href")
$image.attr("src", imageSource);
$close.attr("src", "image/close.png");

$overLay.show();
});

$close.click(function(){
  $($overLay).hide();
})




$(document).ready(function(){
    $("#hide").click(function(){
      $(".paraColor").hide();
    });
    $("#show").click(function(){
      $(".paraColor").show();
    });
  });