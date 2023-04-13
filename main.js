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

  $('#resultBox').show(500)
  const id = getIdFromUrl(driveLink);
  if (id !== "bad URL") {
    const shortID = shortenURL(id);
    $('#resultTextArea').text(shortID);
  } else {
    $('#resultTextArea').text("bad URL");
  }
}

function getIdFromUrl(url) {
  if (url.match(/[-\w]{25,}/)) {
    return url.match(/[-\w]{25,}/)[0];
  } else {
    return "bad URL";
  }
}

function shortenURL(id) {
  const hash = CryptoJS.SHA1(id).toString();
  const shortString = hash.slice(0, 8); // take the first 8 characters of the hash value
  return shortString;
}

 


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

