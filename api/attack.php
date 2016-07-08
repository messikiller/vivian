<?php
$db = require_once('mysql.con.inc.php');
$config = require('../config.php');

$role_id = $_GET['role_id'];
$type = strtolower($_GET['type']);

$p_u = $config['U'] * $config[$type . '_times'][0];
$p_v = $config['V'] * $config[$type . '_times'][1];
$p_w = $config['W'] * $config[$type . '_times'][2];
$p_x = $config['X'] * $config[$type . '_times'][3];
$p_y = $config['Y'] * $config[$type . '_times'][4];
$p_z = $config['Z'] * $config[$type . '_times'][5];

$rand = mt_rand(70, 130);

$delta_harm = ($config[$type . '_harm'] - $p_u + $p_v + $p_x + $p_y + $p_z) * $rand / 100;

$delta_harm = intval($delta_harm);

echo $delta_harm;
?>
