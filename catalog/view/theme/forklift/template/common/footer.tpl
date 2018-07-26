<footer class="main-footer">

    <div class="footer-top container">
        <div class="footer-top__column logo">
            <img src="catalog/view/theme/forklift/images/logo.png" alt="">
        </div>
        <div class="footer-top__column">
            <a class="footer-top__column-nav" href="/index.php?route=common/home">Главная</a>
        </div>
        <div class="footer-top__column">
            <a class="footer-top__column-nav" href="/index.php?route=product/showproductall">Каталог техники Komatsu</a>
        </div>
        <div class="footer-top__column">
            <a class="footer-top__column-nav" href="/index.php?route=information/information&information_id=8">Запчасти Komatsu</a>
        </div>
    </div>
    <div class="footer-bottom container">

        <div class="footer-bottom__column">
            <h2 class="footer-bottom__heading"}>Каталог складской техники Komatsu</h2>
        </div>

        <!--<div class="footer-bottom__name"><?php echo $this->config->get('config_name'); ?></div>-->
        <div class="footer-bottom__column last">
            <div class="footer-bottom__phone">
                <span><?php echo $this->config->get('config_telephone'); ?></span>
                <span><?php echo $this->config->get('config_fax'); ?></span>
            </div>
            <div class="footer-bottom__email">
            <address><?php echo $this->config->get('config_address'); ?></address>
                <a href="mailto:<?php echo $this->config->get('config_email');?>"><?php echo $this->
                    config->get('config_email'); ?></a>
            </div>
        </div>

        <div class="footer-bottom__column anchor">
            <span class="footer-bottom__up-anchor">
                <div class="up">вернуться<br/>наверх</div>
            </span>
        </div>

    </div>
    <div class="counter">
        <!-- Yandex.Metrika informer -->
        <a href="https://metrika.yandex.ru/stat/?id=49678675&amp;from=informer"
           target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/49678675/1_0_FFFFFFFF_EFEFEFFF_0_uniques"
                                               style="width:80px; height:15px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (уникальные посетители)" class="ym-advanced-informer" data-cid="49678675" data-lang="ru" /></a>
        <!-- /Yandex.Metrika informer -->

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter49678675 = new Ya.Metrika2({
                            id:49678675,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                    } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/tag.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
            })(document, window, "yandex_metrika_callbacks2");
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/49678675" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </div>

</footer>



</div><!-- End div .root -->

<script>
    window.utils.categories = [];
</script>
<?php foreach ($categories as $category) { ?>
    <script>
        window.utils.categories.push({name: "<?php echo $category['name']; ?>", href: "<?php echo $category['href']; ?>".replace(/&amp;/g, '&')});
    </script>
<?php } ?>


<script src="catalog/view/theme/forklift/js/legacy/swiper-min.js"></script>
<script src="catalog/view/theme/forklift/js/legacy/mask.js"></script>
<script src="catalog/view/theme/forklift/js/legacy/magnific-popup.min.js"></script>
<script src="catalog/view/theme/forklift/js/legacy/main.js"></script>
<script src="catalog/view/theme/forklift/js/build/app.js"></script>
</body>
</html>
