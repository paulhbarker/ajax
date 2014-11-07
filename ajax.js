function ajaxCall1() {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if( xmlHttp.readyState == 4 ) {
      if( xmlHttp.status == 200 ) {
          handleResponse1( xmlHttp.responseText );
      }
    }
  }

  xmlHttp.open("GET", "ajax-receiver.php?t=" + Math.random() + "&q=ajax_call_1", true); 
  xmlHttp.send();
}

function handleResponse1( response ) {
  document.querySelector('#use-ajax').disabled = true;
  document.querySelector('#response').innerHTML = response;
}

function ajaxCall2() {
  var first_name  = document.querySelector('#first_name').value,
      last_name   = document.querySelector('#last_name').value,
      email       = document.querySelector('#email').value,
      phone       = document.querySelector('#phone').value;
  
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if( xmlHttp.readyState == 4 ) {
      if( xmlHttp.status == 200 ) {
          handleResponse2( xmlHttp.responseText );
      }
    }
  }
  
  var params = "q=ajax_call_2";
  params += "&first_name=" + first_name;
  params += "&last_name=" + last_name;
  params += "&email=" + email;
  params += "&phone=" + phone;
  
  xmlHttp.open("POST","ajax-receiver.php",true);
  xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlHttp.send(params);
}

function handleResponse2( response ) {
  document.querySelector('#use-ajax').disabled = true;
  var person = JSON.parse(response);
  document.querySelector('#response').innerHTML = person.first_name + " " + person.last_name
                                                 + "<br>EMAIL: " + person.email
                                                 + "<br>PHONE: " + person.phone;
}