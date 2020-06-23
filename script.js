
$(".code-title").click(function() {
    $(".code-text").slideToggle();
    $(".caret-right-code").toggle();
    $(".caret-bottom-code").toggle();
  });
  
  $(".employment-title").click(function() {
    $(".employment-text").slideToggle();
    $(".caret-right-employment").toggle();
    $(".caret-bottom-employment").toggle();
  });
  
  $(".education-title").click(function() {
    $(".education-text").slideToggle();
    $(".caret-right-education").toggle();
    $(".caret-bottom-education").toggle();
  });
  
  
  
  $("#personal-reason").click(function() {
    $("#email-button").html("Email personal request");
  });
  
  $("#professional-reason").click(function() {
    $("#email-button").html("Email proffesional request");
  });
  
  $("#email-body").keypress(function() {
    $("#email-button").removeAttr("disabled");
  });
  
  $("#are-you-human").click(function() {
    $("#are-you-human").removeClass("is-invalid");
  });
  
  $("#are-you-human").click(function() {
    $("#are-you-human").addClass("is-valid");
  });
  
  $("#email-button").click(function() {
    window.open("mailto:john.william.cross@gmail.com?subject=Hello&body="
  + $("#email-body").val(), "_blank");
  });
  
  $("#toggle").click(function() {
    if ($(this).is(":checked")) {
        $("#are-you-human").removeClass("is-invalid");
        } else {
                     $("#are-you-human").attr("is-invalid", true);
                     }
  });
  
  /****** my attempts at if and statement below ********/
  
  // function allowEmailButtonClick() {
  //   if ($("email-body").keypress(function() && ($("toggle").click(function())){
  //                                               $("#email-button")
  // .removeAttr("disabled") ;                                             })
  // }
  
  
  // $("#toggle").click(function() {
  //   if ($(this).is(":checked")) &&
  //     $("#email-body").keypress(function() {
  //     ($(this).is("clicked")) {
  //       $("#email-button").removeClass("is-invalid");
  //     }
  //   }
                              
  