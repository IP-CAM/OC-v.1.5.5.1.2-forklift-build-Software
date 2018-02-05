<div id="carousel<?php echo $module; ?>" class="carousel swiper-container">
  <div class="swiper-wrapper">
    <?php foreach ($banners as $banner) { ?>
      <div class="swiper-slide">
        <a href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" /></a>
      </div>
    <?php } ?>
  </div>
</div>

<script>
  $(document).ready(function() {
    new Swiper('#carousel<?php echo $module; ?>', {
      loop: true,
      autoplay: 1500,
      effect: 'fade',
      slidesPerView: <?php echo $limit; ?>,
      initialSlide: <?php echo $scroll; ?>
    });
  });
</script>