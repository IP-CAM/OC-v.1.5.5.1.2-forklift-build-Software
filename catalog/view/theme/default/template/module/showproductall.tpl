<div class="box container products-all">

  <div class="box-heading"><?php echo $heading_title; ?></div>

  <div class="box-content">

		<?php if ($products) { ?>
			<div class="product-list">
				<?php foreach ($products as $product) { ?>
					<a href="<?php echo $product['href']; ?>" class="product">

						<div class="name"><?php echo $product['name']; ?></div>

						<?php if ($product['thumb']) { ?>
							<div class="image">
								<span>
									<img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>" />
								</span>
							</div>
						<?php } ?>


						<div class="attrs">
							<?php if($product['attribute_groups']) { ?>
							<div class="attrs_elem">
								<span><?php echo $product['attribute_groups'][0]['attribute'][0]['name']; ?>:</span>
								<b><?php echo $product['attribute_groups'][0]['attribute'][0]['text']; ?></b>
							</div>
							<div class="attrs_elem">
								<span><?php echo $product['attribute_groups'][0]['attribute'][1]['name']; ?>:</span>
								<b><?php echo $product['attribute_groups'][0]['attribute'][1]['text']; ?></b>
							</div>
							<?php } ?>
							<div class="link"><span>Подробнее</span></div>
						</div>



				 </a>
				<?php } ?>
			</div>
			<div class="show-all"><a href="index.php?route=product/showproductall">Показать все</a></div>
		<?php } ?>

	</div>
</div>
