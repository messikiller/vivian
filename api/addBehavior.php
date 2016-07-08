<?php
$db = require_once('mysql.con.inc.php');
$role_id = $_POST['role_id'];
$type = $_POST['type'] == 'neg' ? 0 : 1;
$content = $_POST['content'];
$time = time();

$sql = "INSERT INTO role_behavior (role_id, behavior, behavior_type, o_time) VALUES ({$role_id}, '{$content}', {$type}, {$time})";
@ $db->query($sql);
?>
