<?php 
/*!
 * Theme Name:One Nav
 * Theme URI:https://www.iotheme.cn/
 * Author:iowen
 * Author URI:https://www.iowen.cn/
 */
?>
<style> 
.loader{width:250px;height:50px;line-height:50px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:helvetica,arial,sans-serif;text-transform:uppercase;font-weight:900;color:#f1404b;letter-spacing:0.2em}
.loader::before,.loader::after{content:"";display:block;width:15px;height:15px;background:#f1404b;position:absolute;animation:load .7s infinite alternate ease-in-out}
.loader::before{top:0}
.loader::after{bottom:0}
@keyframes load{0%{left:0;height:30px;width:15px}
50%{height:8px;width:40px}
100%{left:235px;height:30px;width:15px}
}
</style>
<div class="loader">Loading...</div>