<!DOCTYPE HTML>
<html>
  <head>
    <script type='text/javascript' src='ajax.js'></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>PHP AJAX</title>
  </head>
  <body>
  
  <h1>AJAX Call 2</h1>
  <div class='contact-form'>
    <ul>
      <li> 
          <label for="first_name">First Name: </label>
          <input id="first_name" name="first_name" type="text">
      </li>
      <li> 
          <label for="last_name">Last Name: </label>
          <input id="last_name" name="first_name" type="text">
      </li>
      <li> 
          <label for="email">Email: </label>
          <input id="email" name="email" type="text"> 
      </li>
      <li> 
          <label for="phone">Phone: </label>
          <input id="phone" name="phone" type="text"> 
      </li>
    </ul>
  </div>
  <div id='response'>
    This is a div to hold the response.
  </div>
  
  <section id="options">
    <button type='button' id='use-ajax' onclick='ajaxCall2();'>Use AJAX</button>
  </section>
    
  </body>
</html>