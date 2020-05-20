$(document).ready(function(){
//all your code in user it('description', function(done) {
  // body...
$("input[type='text']").focus(function(){
  $(this).css({
    border: '2px solid green',
    padding: '2px'
  });
});

$("input[type='text']").blur(function(){
  $(this).css({
    border: '',
    padding: ''
  });
});



$("#testLove").click(function(){

  var name = $("#urName").val();

  var lname = $("#urLove").val();

  if (name == "") {
    $("#nameError").html("*Type your name");
    $("#nameError").css({
      color: 'red',
      fontSize: '12px'
    });
  }

  if (lname == "") {
    $("#lnameError").html("*Type Your Love Name")
    $("#lnameError").css({
      color: 'red',
      fontSize: '12px'
    });

  }
  if (lname != "" && name != "") {
    var result = Math.random() * 100;
    var idisko = Math.floor(result);
    $("#resultShow").val(idisko + "%");
    $("#resultShow").fadeIn(2000);
  }


if (name != "") {
  $("#nameError").hide("fast");
}

if (lname != "") {
  $("#lnameError").hide("fast");
}

$("#testLove").css("transform", "translate(2px)");

});

});
