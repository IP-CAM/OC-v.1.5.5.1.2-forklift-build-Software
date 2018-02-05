<?php if($products) { ?>
<div class="box">
    <div class="box-heading"><?php echo $heading_title; ?></div>
    <div class="box-content similar-products">
            <?php foreach ($products as $product) { ?>

        <a href="<?php echo $product['href']; ?>" class="product">
            <div class="name">
                <span><?php echo $product['name']; ?></span>
            </div>
            <?php if ($product['thumb']) { ?>
            <span class="image">
              <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>"/>
            </span>
            <?php } else { ?>
            <span class="image">
              <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>"/>
            </span>
            <?php } ?>

            <div class="attrs">

                <?php if($product['attribute_groups']) { ?>

                <?php foreach ($product['attribute_groups'] as $attribute_group) { ?>
                <!--<?php echo $attribute_group['name']; ?>-->
                <?php $i=0; ?>
                <?php foreach ($attribute_group['attribute'] as $attribute) { ?>
                <?php ++$i; ?>
                <?php if($i==1){ ?>
                <div class="attrs_elem">
                    <span><?php echo $attribute['name']; ?>:</span>
                    <span><?php echo $attribute['text']; ?></span>
                </div>
                <?php } ?>
                <?php if($i==2){ ?>
                <div class="attrs_elem">
                    <span><?php echo $attribute['name']; ?>:</span>
                    <span><?php echo $attribute['text']; ?></span>
                </div>
                <?php } ?>
                <?php if($i==3){ ?>
                <div class="attrs_elem">
                    <span><?php echo $attribute['name']; ?>:</span>
                    <span><?php echo $attribute['text']; ?></span>
                </div>
                <?php } ?>
                <?php } ?>
                <?php } ?>

                <?php } ?>

                <div class="link"><span>Подробнее</span></div>

            </div>



            <!--<div class="attrs_elem">
              <span><?php echo $product['attribute_groups'][0]['attribute'][1]['name']; ?>:</span>
             <b><?php echo $product['attribute_groups'][0]['attribute'][1]['text']; ?></b>
            </div>-->


        </a>

            <?php } ?>
    </div>
</div>
<?php } ?>