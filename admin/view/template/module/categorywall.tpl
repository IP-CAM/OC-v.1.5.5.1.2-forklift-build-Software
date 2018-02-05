<?php echo $header; ?>
<div id="content">
<div class="breadcrumb">
  <?php foreach ($breadcrumbs as $breadcrumb) { ?>
  <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
  <?php } ?>
</div>
<?php if ($error_warning) { ?>
<div class="warning"><?php echo $error_warning; ?></div>
<?php } ?>
<div class="box">
  <div class="heading">
    <h1><img src="view/image/module.png" alt="" /> <?php echo $heading_title; ?></h1>
    <div class="buttons"><a onclick="$('#form').submit();" class="button"><?php echo $button_save; ?></a><a onclick="location = '<?php echo $cancel; ?>';" class="button"><?php echo $button_cancel; ?></a></div>
  </div>
  <div class="content">
    <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form">
	 <table id="module" class="list">
			<tr>
              <td><?php echo $entry_category; ?></td>
              <td><div class="scrollbox">
                  <?php $class = 'odd'; ?>
                  <?php foreach ($categories as $category) { ?>
                  <?php $class = ($class == 'even' ? 'odd' : 'even'); ?>
                  <div class="<?php echo $class; ?>">
                    <?php if (in_array($category['category_id'], $categorywall_category)) { ?>
                    <input type="checkbox" name="categorywall_category[]" value="<?php echo $category['category_id']; ?>" checked="checked" />
                    <?php echo $category['name']; ?>
                    <?php } else { ?>
                    <input type="checkbox" name="categorywall_category[]" value="<?php echo $category['category_id']; ?>" />
                    <?php echo $category['name']; ?>
                    <?php } ?>
                  </div>
                  <?php } ?>
                </div>
                <a onclick="$(this).parent().find(':checkbox').attr('checked', true);"><?php echo $text_select_all; ?></a> / <a onclick="$(this).parent().find(':checkbox').attr('checked', false);"><?php echo $text_unselect_all; ?></a></td>
            </tr>
	</table>
      <table id="module" class="list">
        <thead>
          <tr>
			<td class="left"><?php echo $entry_limit_parent_category; ?></td>
			<td class="left"><?php echo $entry_limit_sub_category; ?></td>
			<td class="left"><?php echo $entry_image; ?></td>
            <td class="left"><?php echo $entry_layout; ?></td>
            <td class="left"><?php echo $entry_position; ?></td>
            <td class="left"><?php echo $entry_status; ?></td>
			
			  <td class="left"><?php echo $entry_cover_status; ?></td>
            <td class="right"><?php echo $entry_sort_order; ?></td>
            <td></td>
          </tr>
        </thead>
		
	
        <?php $module_row = 0; ?>
        <?php foreach ($modules as $module) { ?>
        <tbody id="module-row<?php echo $module_row; ?>">
          <tr>
		    <td class="left"><input type="text" name="categorywall_module[<?php echo $module_row; ?>][limit_parent_category]" value="<?php echo $module['limit_parent_category']; ?>" size="3" />
			<?php if (isset($error_limit_parent_category[$module_row])) { ?>
                <span class="error"><?php echo $error_limit_parent_category[$module_row]; ?></span>
                <?php } ?></td>
			<td class="left"><input type="text" name="categorywall_module[<?php echo $module_row; ?>][limit_sub_category]" value="<?php echo $module['limit_sub_category']; ?>" size="3" />
			<?php if (isset($error_limit_sub_category[$module_row])) { ?>
                <span class="error"><?php echo $error_limit_sub_category[$module_row]; ?></span>
                <?php } ?></td>
			<td class="left"><input type="text" name="categorywall_module[<?php echo $module_row; ?>][image_width]" value="<?php echo $module['image_width']; ?>" size="3" />
                <input type="text" name="categorywall_module[<?php echo $module_row; ?>][image_height]" value="<?php echo $module['image_height']; ?>" size="3" />
                <?php if (isset($error_image[$module_row])) { ?>
                <span class="error"><?php echo $error_image[$module_row]; ?></span>
                <?php } ?></td>
            <td class="left"><select name="categorywall_module[<?php echo $module_row; ?>][layout_id]">
                <?php foreach ($layouts as $layout) { ?>
                <?php if ($layout['layout_id'] == $module['layout_id']) { ?>
                <option value="<?php echo $layout['layout_id']; ?>" selected="selected"><?php echo $layout['name']; ?></option>
                <?php } else { ?>
                <option value="<?php echo $layout['layout_id']; ?>"><?php echo $layout['name']; ?></option>
                <?php } ?>
                <?php } ?>
              </select></td>
            <td class="left"><select name="categorywall_module[<?php echo $module_row; ?>][position]">
                <?php if ($module['position'] == 'content_top') { ?>
                <option value="content_top" selected="selected"><?php echo $text_content_top; ?></option>
                <?php } else { ?>
                <option value="content_top"><?php echo $text_content_top; ?></option>
                <?php } ?>
                <?php if ($module['position'] == 'content_main') { ?>
                <option value="content_main" selected="selected"><?php echo $text_content_main; ?></option>
                <?php } else { ?>
                <option value="content_main"><?php echo $text_content_main; ?></option>
                <?php } ?>
                <?php if ($module['position'] == 'content_bottom') { ?>
                <option value="content_bottom" selected="selected"><?php echo $text_content_bottom; ?></option>
                <?php } else { ?>
                <option value="content_bottom"><?php echo $text_content_bottom; ?></option>
                <?php } ?>
              </select></td>
            <td class="left"><select name="categorywall_module[<?php echo $module_row; ?>][status]">
                <?php if ($module['status']) { ?>
                <option value="1" selected="selected"><?php echo $text_enabled; ?></option>
                <option value="0"><?php echo $text_disabled; ?></option>
                <?php } else { ?>
                <option value="1"><?php echo $text_enabled; ?></option>
                <option value="0" selected="selected"><?php echo $text_disabled; ?></option>
                <?php } ?>
              </select></td>
			  
			<td class="left"><select name="categorywall_module[<?php echo $module_row; ?>][cover_status]">

                <?php if ($module['cover_status']) { ?>

                <option value="1" selected="selected"><?php echo $text_enabled; ?></option>

                <option value="0"><?php echo $text_disabled; ?></option>

                <?php } else { ?>

                <option value="1"><?php echo $text_enabled; ?></option>

                <option value="0" selected="selected"><?php echo $text_disabled; ?></option>

                <?php } ?>

              </select></td>
            <td class="right"><input type="text" name="categorywall_module[<?php echo $module_row; ?>][sort_order]" value="<?php echo $module['sort_order']; ?>" size="3" /></td>
            <td class="left"><a onclick="$('#module-row<?php echo $module_row; ?>').remove();" class="button"><?php echo $button_remove; ?></a></td>
          </tr>
        </tbody>
        <?php $module_row++; ?>
        <?php } ?>
        <tfoot>
          <tr>
            <td colspan="8"></td>
            <td class="left"><a onclick="addModule();" class="button"><?php echo $button_add_module; ?></a></td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</div>
<script type="text/javascript"><!--
var module_row = <?php echo $module_row; ?>;

function addModule() {	
	html  = '<tbody id="module-row' + module_row + '">';
	html += '  <tr>';
	html += '    <td class="left"><input type="text" name="categorywall_module[' + module_row + '][limit_parent_category]" value="8" size="3" /></td>';
	html += '    <td class="left"><input type="text" name="categorywall_module[' + module_row + '][limit_sub_category]" value="7" size="3" /></td>';
	html += '    <td class="left"><input type="text" name="categorywall_module[' + module_row + '][image_width]" value="110" size="3" /> <input type="text" name="categorywall_module[' + module_row + '][image_height]" value="110" size="3" /></td>'; 
	html += '    <td class="left"><select name="categorywall_module[' + module_row + '][layout_id]">';
	<?php foreach ($layouts as $layout) { ?>
	html += '      <option value="<?php echo $layout['layout_id']; ?>"><?php echo $layout['name']; ?></option>';
	<?php } ?>
	html += '    </select></td>';
	html += '    <td class="left"><select name="categorywall_module[' + module_row + '][position]">';
	html += '      <option value="content_top"><?php echo $text_content_top; ?></option>';
	html += '      <option value="content_main"><?php echo $text_content_main; ?></option>';
	html += '      <option value="content_bottom"><?php echo $text_content_bottom; ?></option>';
	html += '    </select></td>';
	html += '    <td class="left"><select name="categorywall_module[' + module_row + '][status]">';
    html += '      <option value="1" selected="selected"><?php echo $text_enabled; ?></option>';
    html += '      <option value="0"><?php echo $text_disabled; ?></option>';
    html += '    </select></td>';
	
	html += '    <td class="left"><select name="categorywall_module[' + module_row + '][cover_status]">';

    html += '      <option value="1" selected="selected"><?php echo $text_enabled; ?></option>';

    html += '      <option value="0"><?php echo $text_disabled; ?></option>';

    html += '    </select></td>';
	html += '    <td class="right"><input type="text" name="categorywall_module[' + module_row + '][sort_order]" value="" size="3" /></td>';
	html += '    <td class="left"><a onclick="$(\'#module-row' + module_row + '\').remove();" class="button"><?php echo $button_remove; ?></a></td>';
	html += '  </tr>';
	html += '</tbody>';
	
	$('#module tfoot').before(html);
	
	module_row++;
}
//--></script>
<?php echo $footer; ?>