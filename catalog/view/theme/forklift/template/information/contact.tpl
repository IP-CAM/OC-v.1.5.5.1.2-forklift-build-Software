<?php echo $header; ?>
<?php echo $content_top; ?>

<div class="top-line container"></div>

<!--<div class="breadcrumb container">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?>
    <a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
</div>-->


<section class="main-wrap contact-page container">
    <?php echo $column_left; ?>

    <h1>Контакты</h1>
    <div class="content">
        <?php echo $content_bottom; ?>
    </div>

    <?php echo $column_right; ?>
</section>

<div class="map-section">
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AgWbKn02cda3ZHqH6qBwgHgS3j7SEyl9W&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
</div>


</div><!-- End div .page-wrap -->

<?php echo $footer; ?>
