
        <?php echo $header; ?>

        <section class="content-top container">
            <div class="">
                <?php echo $content_top; ?>
            </div>
        </section>

        <section class="main-wrap container">
            <?php echo $column_left; ?>
            <div class="main-wrap__content">
                <div class="main-content-module"><?php echo $content_main; ?></div>
                <?php echo $content_bottom; ?>
            </div>
            <?php echo $column_right; ?>
        </section>

    </div><!-- End div .page-wrap -->

<?php echo $footer; ?>
