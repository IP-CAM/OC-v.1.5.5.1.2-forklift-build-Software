
$(document).ready(function () {

    window.mainObj = {
        init: function () {
            this.topMenu();
            this.magnificProductImg();
            this.sidebarMenu();
            this.upBtn();
            if (window.urlShowAllModels !== undefined) {
                this.showPaginationBlock();
                this.showAllModels();
                this.pagination();
            }
        },

        trimName: function () {
            var names = $('.product-grid__item_name span');
            names.each(function (i, item) {
                var $str = $(item).text();
                if ($str.length > 38) {
                    $(item).text($str.slice(0, 38) + '...');
                }
            });
        },

        showTopBannerCategory: function () {
            var banner = $('.content-top').find('.banner');
            if (banner.length > 0) {
                $('.content-top').css('background-color', '#EAEAEA');
            }
        },

        topMenu: function () {
            var arrMenu = $('.top-menu__link');
            var baseUrl = $('base').attr('href');
            for (var i = 0, len = arrMenu.length; i < len; i++) {
                if (document.location.href == arrMenu[i].href) {
                    $(arrMenu[i]).addClass('active');
                }
            }
            if (document.location.href == baseUrl) $(arrMenu[0]).addClass('active');
        },

        // sidebarMenu: function() {
        //     var items = $('.category-box__arrow-right');
        //     items.each(function(i, elem) {
        //         var ul = $(this).next();
        //         $(this).on('click', function() {
        //             ul.slideToggle();
        //             $(this).toggleClass('opened');
        //         });
        //     });
        // },

        sidebarMenu: function() {
            var icons = $('.category-box__icon');
            icons.each(function(i, elem) {
                var ul = $(this).next();
                $(this).on('click', function() {
                    $(this).toggleClass('plus');
                    $(this).toggleClass('minus');
                    ul.toggleClass('showblock');
                });
            });
        },

        // Блок подкатегорий в каталоге
        subCategories: function () {
            var wrapper = $('.similar-categories');
            var parent = $('.category-box__item > a.active');
            var children = parent.next().next('.category-box__sub-menu');
            var clone = children.clone();
            $(clone).find('.active').parent().remove();
            var links = $(clone).find('a');
            links.each(function (i, item) {
                $(item).removeAttr('title');
                var text = $(item).text();
                $(item).html('<span>' + text + '</span>');
            });
            wrapper.html(clone);
        },

        showPaginationBlock: function () {
            var links = $('.category-products-panel__pagination .links');
            var wrapper = $('.category-products-panel__pagination-section');
            if (links.find('a').length <= 0) {
                wrapper.hide();
            }
        },

        showAllModels: function () {
            var decodedUrl = urlShowAllModels.replace(/&amp;/g, '&');
            var showAllModels = $('.show-all-models');
            var container = $('.product-list');
            var loader = $('.category-products-panel__loader');
            showAllModels.on('click', function (e) {
                var self = this;
                e.preventDefault();
                $.ajax({
                    url: decodedUrl,
                    type: 'get',
                    beforeSend: function () {
                        loader.css('opacity', 1);
                    }
                }).done(function (result) {
                    var res = $(result).find('.product-list').html();
                    if (res) {
                        loader.css('opacity', 0);
                        container.html(res);
                        $(self).css({'opacity': '0', 'cursor': 'default'});
                        $('.only-models').remove();
                        $('.category-products-panel__pagination').css({'opacity': '0', 'cursor': 'default'});
                        //===
                        mainObj.trimName();
                        //===
                    }
                }).error(function (err) {
                    console.log(err);
                });
            });
        },

        pagination: function () {
            var self = this;
            var container = $('.product-list');
            var linksWrap = $('.category-products-panel__pagination');
            var links = $('.category-products-panel__pagination .links').find('a');
            var loader = $('.category-products-panel__loader');
            links.each(function (i, item) {
                $(item).on('click', function (e) {
                    e.preventDefault();
                    $.ajax({
                        url: item.href,
                        type: 'get',
                        beforeSend: function () {
                            loader.css('opacity', 1);
                        }
                    }).done(function (result) {
                        var linksBlock = $(result).find('.category-products-panel__pagination .links');
                        var res = $(result).find('.product-list').html();
                        if (res) {
                            loader.css('opacity', 0);
                            linksWrap.html(linksBlock);
                            container.html(res);
                            self.pagination();
                            mainObj.trimName();
                        }
                    }).error(function (err) {
                        console.log(err);
                    });
                });
            });
        },

        upBtn: function () {
            var btn = $('.up');
            btn.on('click', function () {
                $('html, body').animate({scrollTop: 0}, 500, 'swing');
            });
        },


        topSearch: function () {
            $('.search-box__btn').bind('click', function () {
                var url = $('base').attr('href') + 'index.php?route=product/search';
                var search = $('input[name=search]').val();
                if (search) {
                    url += '&search=' + encodeURIComponent(search);
                }
                document.location = url;
            });
            $('header input[name=\'search\']').bind('keydown', function (e) {
                if (e.keyCode == 13) {
                    var url = $('base').attr('href') + 'index.php?route=product/search';
                    var search = $('input[name=search]').val();
                    if (search) {
                        url += '&search=' + encodeURIComponent(search);
                    }
                    document.location = url;
                }
            });
        },

        // Форма
        sendForm: function (title, subject, isProductCardBtn) {
            title = $(title).text();
            var btn = $('.popup__send');
            var result = $('.popup__result');
            var name = $('[data-name=name]'),
                phone = $('[data-name=phone]'),
                email = $('[data-name=email]'),
                city = $('[data-name=city]'),
                company = $('[data-name=company]'),
                howLearn = $('[data-name=how-learn]'),
                comment = $('[data-name=comment]');

            phone.mask('+9 (999) 999-99-99');

            btn.on('click', function (e) {
                e.preventDefault();
                var titleResult;
                if (isProductCardBtn) {
                    titleResult = '<span style="font-weight: normal">Модель: </span>' + title;
                }
                if (!name.val() || !phone.val() || !email.val() || !city.val() || !company.val()) {
                    result.html('<span class="popup__result_err">Пожалуйста, заполните все поля, отмеченные звездочкой <sup>*</sup></span>');
                } else {
                    console.log("send ", this);
                    $.ajax({
                        url: './mail/send.php',
                        type: 'post',
                        data: {
                            name: name.val(),
                            phone: phone.val(),
                            email: email.val(),
                            city: city.val(),
                            company: company.val(),
                            howLearn: howLearn.val(),
                            comment: comment.val(),
                            title: titleResult,
                            subject: subject
                        }
                    }).done(function (res) {
                        $.magnificPopup.open({
                            items: {
                                src: $('#popup-ok')
                            },
                            type: 'inline',
                            callbacks: {
                                open: function() {
                                    setTimeout(function() {
                                        $.magnificPopup.close({
                                            removalDelay: 300,
                                            mainClass: 'mfp-fade'
                                        });
                                    }, 3000);
                                }
                            }
                        });
                        if ($(window).width() < 480) {
                            $("html, body").animate({scrollTop: $('#popup-ok').offset().top - 150}, 1000);
                        }
                        result.html(res);
                        setTimeout(function () {
                            name.val('');
                            phone.val('');
                            email.val('');
                            city.val('');
                            company.val('');
                            howLearn.val('');
                            comment.val('');
                            $.magnificPopup.close();
                            //window.location.reload();
                        }, 3000);
                    }).error(function (err) {
                        console.log(err);
                    });
                }
            });
        },

        magnificProductImg: function () {
            var images = ['.product-card__image-box_image', '.product-card-info .image-additional'];
            images.forEach(function (item, i) {
                $(item).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: 1
                    }
                });
            });
            this.magnificExtend();
        },

        magnificExtend: function () {
            $.extend(true, $.magnificPopup.defaults, {
                tClose: 'Закрыть (Esc)',
                tLoading: 'Загрузка...',
                gallery: {
                    tPrev: 'Предыдущее (Клавиша Стрелка влево)',
                    tNext: 'Следующее (Клавиша Стрелка вправо)',
                    tCounter: '%curr% из %total%'
                },
                image: {
                    tError: '<a href="%url%">Изображение</a> не может быть загружено.'
                },
                ajax: {
                    tError: '<a href="%url%">Изображение</a> не может быть загружено.'
                }
            });
        }
    };

    mainObj.init();

});
