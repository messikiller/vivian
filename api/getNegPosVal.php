<?php
$db = require_once('mysql.con.inc.php');
$role_id = $_GET['role_id'];
$type = $_GET['type'];

if ($type == 'neg') {
    $style = 'negative_value';
} elseif ($type == 'pos') {
    $style = 'positive_value';
}

$sql = 'select ' . $style . ' from role where Id = ' . $role_id;
$result = $db->query($sql)->fetch_assoc();
echo $result[$style];

?>
