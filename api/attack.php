<?php
$db = require_once('mysql.con.inc.php');
$config = require('../config.php');

$role_id = $_GET['role_id'];
$type = strtolower($_GET['type']);

$sql = 'SELECT * FROM role where Id = ' . $role_id;
@ $result = $db->query($sql)->fetch_assoc();

$c_protect_times = intval($result['protect_times']);
$c_blood_value   = intval($result['blood']);
$c_killed_times  = intval($result['killed_times']);

$is_protect = (mt_rand(0, 100) <= ($config['escape_possibility'] * 100)) ? true : false;

if ($is_protect && $c_protect_times > 0) {
	$new_protect_times = $c_protect_times - 1;
	$sql = 'UPDATE role SET protect_times = ' . $new_protect_times . ' WHERE Id = ' . $role_id;
	@ $db->query($sql);
	$data = array(
		'status' => 'protected',
		'new_protect_times' => $new_protect_times,
		'new_blood_value' => $c_blood_value,
		'new_killed_times' => $c_killed_times,
		'delta_harm' => 0
	);
	echo json_encode($data);
	exit();
}

$p_u = $config['U'] * $config[$type . '_times'][0];
$p_v = $config['V'] * $config[$type . '_times'][1];
$p_w = $config['W'] * $config[$type . '_times'][2];
$p_x = $config['X'] * $config[$type . '_times'][3];
$p_y = $config['Y'] * $config[$type . '_times'][4];
$p_z = $config['Z'] * $config[$type . '_times'][5];

$rand = mt_rand(70, 130);

$delta_harm = ($config[$type . '_harm'] - $p_u + $p_v + $p_x + $p_y + $p_z) * $rand / 100;
$delta_harm = $delta_harm <= 0 ? 0 : intval($delta_harm);

if ($delta_harm >= $c_blood_value) {
	$new_killed_times = $c_killed_times + 1;
	$new_blood_value = 100;

	$sql = 'UPDATE role SET killed_times = ' . $new_killed_times . ', blood = '. $new_blood_value .' WHERE Id = ' . $role_id;
	@ $db->query($sql);

	$data = array(
		'status' => 'killed',
		'new_protect_times' => $c_protect_times,
		'new_blood_value' => $new_blood_value,
		'new_killed_times' => $new_killed_times,
		'delta_harm' => $delta_harm
	);

	echo json_encode($data);
	exit();

} else {
	$new_killed_times = $c_killed_times;
	$new_blood_value = $c_blood_value - $delta_harm;

	$sql = 'UPDATE role SET blood = '. $new_blood_value .' WHERE Id = ' . $role_id;
	@ $db->query($sql);

	$data = array(
		'status' => 'harmed',
		'new_protect_times' => $c_protect_times,
		'new_blood_value' => $new_blood_value,
		'new_killed_times' => $c_killed_times,
		'delta_harm' => $delta_harm
	);

	echo json_encode($data);
	exit();
}

?>
