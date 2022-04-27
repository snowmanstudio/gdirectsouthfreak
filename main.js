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

  $('#resultTextArea').text('https://gdirect.github.io/dl/?id=' + getIdFromUrl(driveLink))
}
function getIdFromUrl(url) {

  var expression = url.match(/[-\w]{25,}/);
  return expression[0]


}

$(document).ready(function () {
  $.getJSON("faq.json", function (data) {

    const faqTemplate = $('#flushAccordionRobots').html()

    var newFaq = "";

    data.forEach((element, index) => {

      newFaq = newFaq + faqTemplate.replace("faq question", element.q).replace("faq answer",element.a).replace(/-number/g, "-"+index)
    
    });
    $('#flushAccordionRobots').html(newFaq)
  }).fail(function () {
    console.log("An error has occurred.");

  });
});

