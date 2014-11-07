<?php 
if (isset($_POST['q'])) {
  $action = $_POST['q'];
} elseif (isset($_GET['q'])) {
  $action = $_GET['q'];
}

if ($action == 'ajax_call_1') {
  echo "This is a php response to your AJAX call.";
}

elseif ($action == 'ajax_call_2') {
  $jsonArray = array(
    'first_name' => $_POST['first_name'],
    'last_name' => $_POST['last_name'],
    'email' => $_POST['email'],
    'phone' => $_POST['phone']
  );
  header('Content-type: application/json');
  echo json_encode($jsonArray);
}
?>