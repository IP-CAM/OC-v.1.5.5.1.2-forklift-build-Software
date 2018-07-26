<div class="slideshow">
  <div id="slideshow<?php echo $module; ?>" class="slider swiper-container">
    <div class="swiper-wrapper">
      <?php foreach ($banners as $banner) { ?>
        <?php if ($banner['link']) { ?>
          <a href="<?php echo $banner['link']; ?>" class="swiper-slide"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" /></a>
        <?php } else { ?>
          <img src="<?php echo $banner['image']; ?>" class="swiper-slide" alt="<?php echo $banner['title']; ?>" />
        <?php } ?>
      <?php } ?>
    </div>
    <div class="swiper-prev arrows"></div>
    <div class="swiper-next arrows"></div>
  </div>
  <div class="slideshow__bottom">
    <div>
      <span>Ремонт любой сложности</span>
      <span>Обслуживание любых брендов</span>
    </div>
    <div>
      <span>Професионлаьное оборудование</span>
      <span>Квалифицированые мастера</span>
    </div>
    <div>
      <span>Оригинальные запчасти</span>
      <span>Короткие сроки</span>
    </div>
  </div>
</div>

<script>
  $(document).ready(function() {
    new Swiper('#slideshow<?php echo $module; ?>', {
      loop: true,
      prevButton: $('.swiper-prev'),
      nextButton: $('.swiper-next')
    });
  });
</script>
