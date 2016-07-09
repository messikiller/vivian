<?php
$db = require_once('mysql.con.inc.php');
$role_id = $_GET['role_id'];

$sql = 'select * from role_behavior where role_id = ' . $role_id . ' ORDER BY o_time DESC';
@ $query = $db->query($sql);

$data = array();
while ($row = $query->fetch_assoc()) {
    $data[] = $row;
}

foreach ($data as $k => $v) {
	$tmp = $data[$k]['o_time'];
	$data[$k]['o_time'] = date('Y-m-d H:i:s', $tmp);
}

echo json_encode($data);
?>
