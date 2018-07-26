
        <?php echo $header; ?>

        <section class="content-top">
            <div>
                <?php echo $content_top; ?>
            </div>
        </section>

        <section class="main-wrap">
            <div class="wrapper container">
            <?php echo $column_left; ?>
            <div class="main-wrap__content">

                <div class="parts">
                    <a class="parts__link" href="/index.php?route=information/information&information_id=8" title="Запчасти для техники Noblelift">
                        <span>Запчасти<span class="parts__link-more">Подробнее</span></span>
                    </a>
                </div>

                <div class="main-content-module"><?php echo $content_main; ?></div>
                <?php echo $content_bottom; ?>
            </div>
            <?php echo $column_right; ?>
            </div>
        </section>

    </div><!-- End div .page-wrap -->

<?php echo $footer; ?>
