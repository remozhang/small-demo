<?php
header('content-type:application/json;charset=utf-8');
require 'setting.php';

$res = render();
print_r(json_encode($res));

