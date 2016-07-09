<?php
$db = require_once('mysql.con.inc.php');

$role_id = $_GET['role_id'];

$sql = 'SELECT protect_times FROM role where Id = ' . $role_id;
@ $result = $db->query($sql)->fetch_assoc();

$c_times = $result['protect_times'];

$sql = 'UPDATE role SET protect_times=protect_times+1 WHERE Id = ' . $role_id;
@ $db->query($sql);

$data = intval($c_times) + 1;
echo $data;
?>