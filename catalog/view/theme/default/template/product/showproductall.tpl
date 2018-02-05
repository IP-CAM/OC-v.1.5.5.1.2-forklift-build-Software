<?php echo $header; ?>

<section class="content-top">
  <?php echo $content_top; ?>
</section>

<section class="main-wrap container">
  <?php echo $column_left; ?>
  <div class="main-wrap__content">

    <div class="breadcrumb">
      <?php foreach ($breadcrumbs as $breadcrumb) { ?>
      <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
      <?php } ?>
    </div>

    <div class="box container products-all_page">
      <div class="box-heading"><h1><?php echo $heading_title; ?></h1></div>

      <div class="main-content-module"><?php echo $content_main; ?></div>

      <div class="box-content">

        <?php if ($products) { ?>

        <script>
          $(document).ready(function() {
            // Create global variable with url page for all products
            window.urlShowAllModels = '<?php echo $limits[1]["href"]; ?>';
          });
        </script>
        <div>
          <?php if ($products) { ?>
            <h2 class="product-list__heading">Все предложения</h2>
          <?php }?>
          <div class="product-list">
            <?php foreach ($products as $product) { ?>
            <a href="<?php echo $product['href']; ?>" class="product">
              <div class="name">
                <span><?php echo $product['name']; ?></span>
              </div>
              <?php if ($product['thumb']) { ?>
              <span class="image">
              <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>"/>
            </span>
              <?php } else { ?>
              <span class="image">
              <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>"/>
            </span>
              <?php } ?>

              <div class="attrs">

                <?php if($product['attribute_groups']) { ?>

                <?php foreach ($product['attribute_groups'] as $attribute_group) { ?>
                <!--<?php echo $attribute_group['name']; ?>-->
                <?php $i=0; ?>
                <?php foreach ($attribute_group['attribute'] as $attribute) { ?>
                <?php ++$i; ?>
                <?php if($i==1){ ?>
                <div class="attrs_elem">
                  <span><?php echo $attribute['name']; ?>:</span>
                  <span><?php echo $attribute['text']; ?></span>
                </div>
                <?php } ?>
                <?php if($i==2){ ?>
                <div class="attrs_elem">
                  <span><?php echo $attribute['name']; ?>:</span>
                  <span><?php echo $attribute['text']; ?></span>
                </div>
                <?php } ?>
                <?php if($i==3){ ?>
                <div class="attrs_elem">
                  <span><?php echo $attribute['name']; ?>:</span>
                  <span><?php echo $attribute['text']; ?></span>
                </div>
                <?php } ?>
                <?php } ?>
                <?php } ?>

                <?php } ?>

                <div class="link"><span>Подробнее</span></div>

              </div>



              <!--<div class="attrs_elem">
                <span><?php echo $product['attribute_groups'][0]['attribute'][1]['name']; ?>:</span>
               <b><?php echo $product['attribute_groups'][0]['attribute'][1]['text']; ?></b>
              </div>-->


            </a>
            <?php } ?>
          </div>
        </div>
        <?php } ?>


        <div class="category-products-panel only-models">
          <div class="category-products-panel__pagination-section">
            <div class="category-products-panel__show-all">
              <a href="#" class="show-all-models">Показать все модели</a>
            </div>
            <div class="category-products-panel__loader"><img src="./catalog/view/theme/forklift/images/loader.gif" alt=""></div>
            <div class="category-products-panel__pagination"><?php echo $pagination; ?></div>
          </div>
        </div>


      </div>
    </div>


    <?php echo $content_bottom; ?>
  </div>
  <?php echo $column_right; ?>
</section>

</div><!-- End div .page-wrap -->

<?php echo $footer; ?>
