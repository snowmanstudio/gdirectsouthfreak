$(document).ready(function () {
    $('.wide').niceSelect();
  });
  
  $("#linkBtn").click(function () {
    $(this).addClass('active')
    $('#codeBtn').removeClass('active')
    $("#codeGenerator").hide(500);
    $("#link_tab").show(500);
  
  });
  $("#codeBtn").click(function () {
    $(this).addClass('active')
    $('#linkBtn').removeClass('active')
    $("#codeGenerator").show(500);
    $("#link_tab").hide(500);
  });
  $("#copyLink").click(function () {
    $('#resultTextArea').select()
    document.execCommand("copy");
  
  });
  
  function generate() {
    var driveLink = $("#driveLinkTextArea").val()
   
    $('#resultTextArea').text('https://dl.itsourov.com/id/'+getIdFromUrl(driveLink))
  }
  function getIdFromUrl(url) {
  
  var expression = url.match(/[-\w]{25,}/);
     return expression[0]
  
   
  }