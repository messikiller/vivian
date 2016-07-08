<?php
return array(
    // 数据库配置项
    'db_host'   => '127.0.0.1',
    'db_user'   => 'root',
    'db_passwd' => '',
    'db_port'   => '3306',
    'db_name'   => 'vivian',

    // 不同攻击方式对于的伤害基值
    'a_harm' => 1,
    'b_harm' => 1,
    'c_harm' => 1,
    'd_harm' => 1,

    // 不同面上属性的基础值
    'U' => 1,
    'V' => 2,
    'W' => 3,
    'X' => 4,
    'Y' => 5,
    'Z' => 6,

    // 不同攻击方式对应的免伤属性的倍数，从左到右依次对应属性：U、V、W、X、Y、Z
    'a_times' => array(1, 2, 3, 4, 5, 6),
    'b_times' => array(1, 2, 3, 4, 5, 6),
    'c_times' => array(1, 2, 3, 4, 5, 6),
    'd_times' => array(1, 2, 3, 4, 5, 6),
);
?>
