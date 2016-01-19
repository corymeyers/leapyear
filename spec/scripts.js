//var leapYear = function(year) {
//  if (year % 100 === 0) {
//    return false;
//  } else if (year % 4 === 0) {
//  return true;
//  } else {
//    return false;
//  }
//};

//function leapYear(year) {
//  return ((year % 4 ===0) && (year % 100 !==100)) || (year % 400 ===0);
//}

function leapYear(year) {
  if ((year % 4 ===0) && (year % 100 !==100) || (year % 400 ===0)){
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
