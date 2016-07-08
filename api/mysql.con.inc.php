<?php
$config = require_once('../config.php');

return new mysqli($config['db_host'], $config['db_user'], $config['db_passwd'], $config['db_name']);
?>
