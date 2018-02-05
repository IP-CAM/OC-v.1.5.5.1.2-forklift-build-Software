<?php echo $header; ?>
<?php echo $content_top; ?>

<div class="top-line container"></div>

<div class="breadcrumb container">
  <?php foreach ($breadcrumbs as $breadcrumb) { ?>
  <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
  <?php } ?>
</div>


<section class="main-wrap container">
  <?php echo $column_left; ?>

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
