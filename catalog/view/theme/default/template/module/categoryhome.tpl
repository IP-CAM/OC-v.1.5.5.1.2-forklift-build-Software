<div class="category-top container">
    <?php foreach ($categoryhome as $categoryhome) { ?>
        <a class="item" href="<?php echo $categoryhome['href']; ?>">
            <div class="item__title"><?php echo $categoryhome['name']; ?></div>
            <div class="item__content">
                <img src="<?php echo $categoryhome['thumb']; ?>" alt="<?php echo $categoryhome['name']; ?>" />
            </div>
            <div class="item__button">Подробнее...</div>
        </a>
    <?php } ?>
    <a class="item" href="./index.php?route=information/information&information_id=8">
        <div class="item__title">Запчасти</div>
        <div class="item__content">
            <img src="catalog/view/theme/forklift/images/parts.jpg" alt="Запчасти" />
        </div>
    </a>
</div>

