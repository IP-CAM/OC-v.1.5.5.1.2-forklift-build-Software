<?php echo $header; ?>
<?php echo $content_top; ?>

<section class="content-top">
  <div>
    <?php echo $content_top; ?>
  </div>
</section>


<section class="main-wrap container">
  <?php echo $column_left; ?>

  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>

  <!-- Content -->
  <!-- <div class="main-wrap__content"> -->
  <div class="static-content">
    <h1><?php echo $heading_title; ?></h1>
    <?php echo $description; ?>
  </div>
  <?php echo $content_bottom; ?>
  <!-- </div> -->
  <!-- /Content -->

  <?php echo $column_right; ?>
</section>


</div><!-- End div .page-wrap -->

<?php echo $footer; ?>
