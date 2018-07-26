<div class="box">
  <div class="box-heading"><?php echo $heading_title; ?></div>
  <div class="box-content">
    <div class="featured">
      <?php foreach ($products as $product) { ?>
        <div class="featured__elem">

          <div class="name"><?php echo $product['name']; ?></div>
          
          <?php if ($product['attribute_groups']) { ?>
            <div class="featured__attributes">
              <?php foreach($product['attribute_groups'] as $attribute_group) { ?>
              <div class="featured__attributes_items">
                <?php foreach($attribute_group['attribute'] as $attribute) { ?>
                <div class="featured__attributes_item">
                  <div class="featured__attributes_item_name"><?php echo $attribute['name']; ?></div>
                  <div class="featured__attributes_item_text"><?php echo $attribute['text']; ?></div>
                </div>
                <?php } ?>
              </div>
              <?php } ?>
            </div>
          <?php } ?>

          <div class="in-stock">В наличии на складе в <span><i>г.</i>Тула</span></div>

          <div class="more">
            <a href="<?php echo $product['href']; ?>">Подробнее >></a>
          </div>

        </div>
      <?php } ?>
    </div>
  </div>
</div>
