<?php
$db = require_once('mysql.con.inc.php');
$role_id = $_GET['role_id'];

$sql = 'select * from role_behavior where role_id = ' . $role_id;
@$result = $db->query($sql)->fetch_assoc();
$behavior_id = $result['behavior_id'];

$sql = 'select * from behavior where behavior_id = ' . $behavior_id;
@$result = $db->query($sql)->fetch_assoc();
$data = array(
    'name' => $result['name'],
    'type' => $result['type'],
    'content' => $result['content'],
    'o_time' => date('Y-m-d H:i:s', $result['o_time'])
);
echo json_encode($data);
?>
