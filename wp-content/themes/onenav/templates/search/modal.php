<?php
/*
 * @Theme Name:One Nav
 * @Theme URI:https://www.iotheme.cn/
 * @Author: iowen
 * @Author URI: https://www.iowen.cn/
 * @Date: 2021-03-01 10:19:07
 * @LastEditors: iowen
 * @LastEditTime: 2021-08-30 16:28:20
 * @FilePath: \onenav\templates\search\modal.php
 * @Description: 
 */
if ( ! defined( 'ABSPATH' ) ) { exit; } 
// 搜索列表请到 inc\search-list.php 文件修改
$search_list = get_search_list();
?> 
<div id="search" class="s-search mx-auto my-4">
    <div id="search-list" class="hide-type-list">
        <div class="s-type">
            <span></span>
            <div class="s-type-list">
                <?php foreach ($search_list as $value) {
                    echo '<label for="m_'.$value['default'].'" data-id="'.$value['id'].'">'.$value['name'].'</label>';
                } ?>
            </div>
        </div>
        <?php $i=0; foreach ($search_list as $value) {
            echo '<div class="search-group '.$value['id'].'">';
            echo '<span class="type-text text-muted">'.$value['name'].'</span>';
            echo '<ul class="search-type">';
            foreach ($value['list'] as $s) {
                if($i==0 && $s['id']==$value['default'])
                    echo '<li><input checked="checked" hidden type="radio" name="type2" id="m_'.$s['id'].'" value="'.$s['url'].'" data-placeholder="'.$s['placeholder'].'"><label for="m_'.$s['id'].'"><span class="text-muted">'.$s['name'].'</span></label></li>';
                else
                    echo '<li><input hidden type="radio" name="type2" id="m_'.$s['id'].'" value="'.$s['url'].'" data-placeholder="'.$s['placeholder'].'"><label for="m_'.$s['id'].'"><span class="text-muted">'.$s['name'].'</span></label></li>';
            }
            echo '</ul>';
            echo '</div>';
            $i++;
        } ?>
    </div>
    <form action="<?php echo esc_url(home_url()) ?>?s=" method="get" target="_blank" class="super-search-fm">
        <input type="text" id="m_search-text" class="form-control smart-tips search-key" zhannei="" autocomplete="off" placeholder="<?php _e( '输入关键字搜索', 'i_theme' ); ?>" style="outline:0">
        <button type="submit"><i class="iconfont icon-search"></i></button>
    </form> 
    <div class="card search-smart-tips" style="display: none">
      <ul></ul>
    </div>
</div>
