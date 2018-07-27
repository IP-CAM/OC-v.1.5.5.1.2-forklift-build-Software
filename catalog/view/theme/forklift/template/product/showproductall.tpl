<?php echo $header; ?>

<section class="content-top">
    <?php echo $content_top; ?>
    <div class="parts">
        <a class="parts-link" href="/index.php?route=information/information&information_id=8"
           title="Запчасти для техники TCM">
        </a>
    </div>
</section>

<section class="main-wrap">
    <div class="wrapper container">
    <?php echo $column_left; ?>
    <div class="main-wrap__content">

        <div class="breadcrumb">
            <?php foreach ($breadcrumbs as $breadcrumb) { ?>
            <?php echo $breadcrumb['separator']; ?><a
                    href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
            <?php } ?>
        </div>

        <div class="box container products-all_page">
            <div class="box-heading"><h1><?php echo $heading_title; ?></h1></div>

            <div class="main-content-module"><?php echo $content_main; ?></div>

            <div class="box-content">

            </div>
        </div>

        <?php echo $content_bottom; ?>
    </div>
    <?php echo $column_right; ?>
    </div>
</section>

</div><!-- End div .page-wrap -->

<?php echo $footer; ?>
