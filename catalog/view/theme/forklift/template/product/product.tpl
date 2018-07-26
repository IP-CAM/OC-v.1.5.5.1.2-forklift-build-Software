<?php echo $header; ?>

<section class="content-top">
    <div><?php echo $content_top; ?></div>
</section>

<div class="top-line container"></div>

<section class="main-wrap">
    <div class="wrapper container">
        <?php echo $column_left; ?>

        <!-- Content -->
        <div class="main-wrap__content">

            <div class="parts">
                <a class="parts__link" href="/index.php?route=information/information&information_id=8"
                   title="Запчасти для техники Noblelift">
                    <span>Запчасти<span class="parts__link-more">Подробнее</span></span>
                </a>
            </div>

            <div class="breadcrumb container">
                <?php foreach ($breadcrumbs as $breadcrumb) { ?>
                <?php echo $breadcrumb['separator']; ?><a
                        href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
                <?php } ?>
            </div>

            <div class="product-card">

                <h1><?php echo $heading_title; ?></h1>

                <?php if ($thumb || $images) { ?>
                <div class="product-card__image-box">
                    <?php if ($thumb) { ?>
                    <div class="product-card__image-box_image">
                        <a href="<?php echo $popup; ?>">
                            <img src="<?php echo $thumb; ?>" alt="<?php echo $heading_title; ?>"/>
                        </a>
                    </div>
                    <?php } ?>

                    <div class="product-card__info">
                        <?php if ($attribute_groups) { ?>
                        <div class="product-card__attributes">
                            <h3>Технические характеристики</h3>
                            <?php foreach($attribute_groups as $attribute_group) { ?>
                            <div class="product-card__attributes_items">
                                <?php foreach($attribute_group['attribute'] as $attribute) { ?>
                                <div class="product-card__attributes_item">
                                    <div class="product-card__attributes_item_name"><?php echo $attribute['name']; ?></div>
                                    <div class="product-card__attributes_item_text"><?php echo $attribute['text']; ?></div>
                                </div>
                                <?php } ?>
                            </div>
                            <?php } ?>
                        </div>
                        <?php } ?>

                        <div class="get-price-wrap">
                            <div>
                                <button class="js-get-price-btn btn">Запросить стоимость</button>
                            </div>
                            <?php if ($images) { ?>
                            <div class="product-card__image-box_images">
                                <?php foreach ($images as $image) { ?>
                                <a href="<?php echo $image['popup']; ?>">
                                    <img src="<?php echo $image['thumb']; ?>" alt="<?php echo $heading_title; ?>"/>
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
    </div>
</section>


</div><!-- End div .page-wrap -->

<?php echo $footer; ?>

