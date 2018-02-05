<div class="banner id__<?php echo $module; ?>">
    <?php foreach ($banners as $banner) { ?>
        <?php if ($banner['link']) { ?>
            <div class="banner__img"><a href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>"
                                                                                   alt="<?php echo $banner['title']; ?>"/></a></div>
            <div class="banner__title"><?php echo $banner['title']; ?></div>
        <?php } else { ?>
            <div class="banner__img"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>"/></div>
            <div class="banner__title"><?php echo $banner['title']; ?></div>
    <?php } ?>
    <?php } ?>
</div>
