<div class="category-box">
  <!--<div class="category-box__title"><?php echo $heading_title; ?></div>-->
  <div class="category-box__title">Каталог</div>
  <div class="category-box__content">
    <ul>
      <?php foreach ($categories as $category) { ?>
      <li class="category-box__item">
        <?php if ($category['category_id'] == $category_id) { ?>
        <a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
        <?php } else { ?>
        <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
        <?php } ?>
        <?php if ($category['children']) { ?>
        <i class="category-box__icon plus" title="Развернуть"></i>
        <ul class="category-box__sub-menu">
          <?php foreach ($category['children'] as $child) { ?>
          <li class="category-box__sub-item">
            <?php if ($child['category_id'] == $child_id) { ?>
            <a href="<?php echo $child['href']; ?>" class="active"><?php echo $child['name']; ?></a>
            <?php } else { ?>
            <a href="<?php echo $child['href']; ?>"><?php echo $child['name']; ?></a>
            <?php } ?>
          </li>
          <?php } ?>
        </ul>
        <?php } ?>
      </li>
      <?php } ?>
      <li class="category-box__item">
        <a href="/index.php?route=information/information&information_id=8">Запчасти</a>
      </li>
    </ul>
  </div>
</div>
