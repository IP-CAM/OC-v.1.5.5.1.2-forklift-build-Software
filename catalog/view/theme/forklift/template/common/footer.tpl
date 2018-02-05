<footer class="main-footer">

    <div class="footer-top container">
        <div class="footer-top__column">
            <span class="footer-top__up-anchor">
                <div class="up">вернуться<br>наверх</div>
            </span>
        </div>

    </div>
    <div class="footer-bottom container">

        <div class="footer-bottom__column logo">
            <img src="catalog/view/theme/forklift/images/logo-footer.png" alt="">
            <h2 class="footer-bottom__heading"}>Каталог складской техники Yale</h2>
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


    </div>
    <div class="counter">
        <!-- Yandex.Metrika informer -->
        <a href="https://metrika.yandex.ru/stat/?id=47377246&amp;from=informer"
           target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/47377246/1_0_EFEFEFFF_EFEFEFFF_0_uniques"
                                               style="width:80px; height:15px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (уникальные посетители)" class="ym-advanced-informer" data-cid="47377246" data-lang="ru" /></a>
        <!-- /Yandex.Metrika informer -->

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter47377246 = new Ya.Metrika2({
                            id:47377246,
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
        <noscript><div><img src="https://mc.yandex.ru/watch/47377246" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </div>

</footer>


<div id="popup-form" class="popup mfp-hide">
    <h2></h2>
    <form class="popup__form">
        <div class="popup__item">
            <div class="popup__item_name"><span>ФИО:<sup>*</sup></span></div>
            <div class="popup__item_field"><input type="text" data-name="name" placeholder="Фамилия Имя Отчество"></div>
        </div>
        <div class="popup__item">
            <div class="popup__item_name"><span>Телефон:<sup>*</sup></span></div>
            <div class="popup__item_field"><input type="tel" data-name="phone" placeholder="+_ (___) ___-__-__"></div>
        </div>
        <div class="popup__item">
            <div class="popup__item_name"><span>Email:<sup>*</sup></span></div>
            <div class="popup__item_field"><input type="email" data-name="email" placeholder="email@mail.com"></div>
        </div>
        <div class="popup__item">
            <div class="popup__item_name"><span>Город:<sup>*</sup></span></div>
            <div class="popup__item_field"><input type="text" data-name="city" placeholder="Ваш город"></div>
        </div>
        <div class="popup__item">
            <div class="popup__item_name"><span>Название компании:<sup>*</sup></span></div>
            <div class="popup__item_field"><input type="text" data-name="company" placeholder="Ваша компания"></div>
        </div>
        <div class="popup__item">
            <div class="popup__item_name"><span>Комментарий:</span></div>
            <div class="popup__item_field"><textarea data-name="comment" placeholder="Ваш комментарий"></textarea></div>
        </div>
        <div class="popup__result"></div>
        <button class="popup__send btn">Отправить</button>
    </form>
</div>


<div id="popup-ok" class="popup mfp-hide mfp-with-anim">
    <h3>Спасибо за заявку.<br>Мы обязательно свяжемся с Вами!</h3>
</div>

</div><!-- End div .root -->

<script>
    window.utils.categories = [];
</script>
<?php foreach ($categories as $category) { ?>
    <script>
        window.utils.categories.push({name: "<?php echo $category['name']; ?>", href: "<?php echo $category['href']; ?>".replace(/&amp;/g, '&')});
    </script>
<?php } ?>


<script src="catalog/view/theme/forklift/js/vendor/swiper-min.js"></script>
<script src="catalog/view/theme/forklift/js/vendor/mask.js"></script>
<script src="catalog/view/theme/forklift/js/vendor/magnific-popup.min.js"></script>
<script src="catalog/view/theme/forklift/js/main.js"></script>
<script src="catalog/view/theme/forklift/js/build/app.js"></script>
</body>
</html>
