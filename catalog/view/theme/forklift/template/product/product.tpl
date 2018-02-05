<?php echo $header; ?>

<section class="content-top">
  <div><?php echo $content_top; ?></div>
</section>

<div class="top-line container"></div>

<section class="main-wrap container">
  <?php echo $column_left; ?>

  <!-- Content -->
  <div class="main-wrap__content">

    <div class="breadcrumb container">
      <?php foreach ($breadcrumbs as $breadcrumb) { ?>
      <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
      <?php } ?>
    </div>

    <div class="product">

        <h1><?php echo $heading_title; ?></h1>

        <?php if ($thumb || $images) { ?>
        <div class="product__image-box">
          <?php if ($thumb) { ?>
          <div class="product__image-box_image">
            <a href="<?php echo $popup; ?>">
              <img src="<?php echo $thumb; ?>" alt="<?php echo $heading_title; ?>" />
            </a>
          </div>
          <?php } ?>

          <div class="product__info">
            <?php if ($attribute_groups) { ?>
            <div class="product__attributes">
              <h3>Технические характеристики</h3>
              <?php foreach($attribute_groups as $attribute_group) { ?>
              <div class="product__attributes_items">
                <?php foreach($attribute_group['attribute'] as $attribute) { ?>
                <div class="product__attributes_item">
                  <div class="product__attributes_item_name"><?php echo $attribute['name']; ?></div>
                  <div class="product__attributes_item_text"><?php echo $attribute['text']; ?></div>
                </div>
                <?php } ?>
              </div>
              <?php } ?>
            </div>
            <?php } ?>

            <div class="get-price-wrap">
              <div><a class="get-price btn" href="#popup-form">Запросить стоимость</a></div>
              <?php if ($images) { ?>
              <div class="product__image-box_images">
                <?php foreach ($images as $image) { ?>
                <a href="<?php echo $image['popup']; ?>">
                  <img src="<?php echo $image['thumb']; ?>" alt="<?php echo $heading_title; ?>" />
                </a>
                <?php } ?>
              </div>
              <?php } ?>
            </div>

          </div>

        </div>
        <?php } ?>

        <div class="product-description">
          <?php if($description) { ?>
            <?php echo $description; ?>
          <?php } ?>
        </div>

      </div>



      <!-- Другие подкатегории -->
      <!-- <h2 class="similar-title">Каталог продукции</h2>
      <div class="similar-categories"></div> -->

  <?php echo $content_bottom; ?>
</div>
<!-- /Content -->

<?php echo $column_right; ?>
</section>


</div><!-- End div .page-wrap -->

<?php echo $footer; ?>

