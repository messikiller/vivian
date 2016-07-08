<?php
$db = require_once('mysql.con.inc.php');
$role_id = $_GET['role_id'];

$sql = 'select * from role_behavior where role_id = ' . $role_id;
@ $query = $db->query($sql);

$data = array();
while ($row = $query->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
